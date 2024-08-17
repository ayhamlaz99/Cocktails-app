import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { CocktailsService } from '../4.Services/cocktails.service';
import { Cocktail } from '../1.Interfaces/cocktail';

export const cocktailDetailsResolver: ResolveFn<Cocktail> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const id = route.paramMap.get('id')?.toString();
    console.log(id)
    if ( id  && id !== '0')
      return inject(CocktailsService).getCocktailDetailsById(id);
    else
      return inject(CocktailsService).getCocktailByName(route.paramMap.get('name'));
  };