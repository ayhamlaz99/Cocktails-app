import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { CocktailsService } from '../4.Services/cocktails.service';
import { Ingredient } from '../1.Interfaces/ingredient';


export const ingredientDetailsResolver: ResolveFn<Ingredient> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(CocktailsService).getIngredientByName(route.paramMap.get('name'));
  };