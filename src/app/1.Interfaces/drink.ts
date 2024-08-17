import { Cocktail } from "./cocktail";

export interface Drink {
   idDrink: string, dateModified: string, strAlcoholic: string,
   strCategory: string, strDrink: string, strDrinkAlternate: string,
   strDrinkThumb: string, strGlass: string, strImageAttribution: string,
   strImageSource: string, strInstructions: string,
   strIngredient1: string, strIngredient2: string, strIngredient3: string,
   strIngredient4: string, strIngredient5: string, strIngredient6: string,
   strMeasure1: string, strMeasure2: string, strMeasure3: string,
   strMeasure4: string, strMeasure5: string, strMeasure6: string
}

export function transformDrinkToCocktail(drink: Drink): Cocktail {
   const ingredients: string[] = [];
   const measures: string[] = [];

   for (let i = 1; i <= 6; i++) {
      const ingredientKey = `strIngredient${i}` as keyof Drink;
      const measureKey = `strMeasure${i}` as keyof Drink;
      if (drink[ingredientKey]) ingredients.push(drink[ingredientKey]);
      if (drink[measureKey]) measures.push(drink[measureKey]);
   }

   return {
      id: drink.idDrink ? drink.idDrink : '',
      alcoholic: drink.strAlcoholic ? drink.strAlcoholic : '',
      category: drink.strCategory ? drink.strCategory : '',
      drink: drink.strDrink ? drink.strDrink : '',
      drinkAlternate: drink.strDrinkAlternate ? drink.strDrinkAlternate : '',
      drinkThumb: drink.strDrinkThumb ? drink.strDrinkThumb : '',
      glass: drink.strGlass ? drink.strGlass : '',
      imageAttribution: drink.strImageAttribution ? drink.strImageAttribution : '',
      ingredients: ingredients ? ingredients : [],
      imageSource: drink.strImageSource ? drink.strImageSource : '',
      instructions: drink.strInstructions ? drink.strInstructions : '',
      measures: measures ? measures : [],
      dateModified: drink.dateModified ? drink.dateModified : ''
   };
}