import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Drink, transformDrinkToCocktail } from '../1.Interfaces/drink';
import { Cocktail } from '../1.Interfaces/cocktail';
import { Ingredient } from '../1.Interfaces/ingredient';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private http: HttpClient, @Inject('apiUrl') private apiUrl: string) { }

  getCocktailsListByFirstLetter(fl: string): Observable<Cocktail[]> {
    return this.http.get<{ drinks: Drink[] }>(this.apiUrl + `/search.php?f=${fl}`)
      .pipe(map(res => res.drinks.map(drink => transformDrinkToCocktail(drink))));
  }

  getCocktailsListByIngredients(ing: string | null): Observable<Cocktail[]> {
    return this.http.get<{ drinks: Drink[] }>(this.apiUrl + `/filter.php?i=${ing}`)
      .pipe(map(res => res.drinks.map(drink => transformDrinkToCocktail(drink))));
  }

  getCocktailDetailsById(id: string): Observable<Cocktail> {
    return this.http.get<{ drinks: Drink[] }>(this.apiUrl + `/lookup.php?i=${id}`)
      .pipe(map(res => transformDrinkToCocktail(res.drinks[0])));
  }

  getCocktailByName(name: string | null): Observable<Cocktail> {
    return this.http.get<{ drinks: Drink[] }>(this.apiUrl + `/search.php?s=${name}`)
      .pipe(map(res => transformDrinkToCocktail(res.drinks[0])));
  }

  
  getIngredientsList(): Observable<string[]> {
    return this.http.get<{ drinks: { strIngredient1: string }[] }>(this.apiUrl + `/list.php?i=list`)
      .pipe(map(res => res.drinks.map((ingredient) => ingredient.strIngredient1)));
  }

  getIngredientByName(name: string | null): Observable<Ingredient> {
    return this.http.get<{ ingredients: Ingredient[] }>(this.apiUrl + `/search.php?i=${name}`)
      .pipe(map(res => res.ingredients[0]));
  }
}
