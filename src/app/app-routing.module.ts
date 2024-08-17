import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { cocktailDetailsResolver } from './cocktail-details/cocktail-details.resolver';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';
import { ingredientDetailsResolver } from './ingredient-details/ingredient-details.resolver';
import { NotAuthorizedPageComponent } from './not-authorized-page/not-authorized-page.component';
import { AuthGuard } from './3.Guards/auth.guard';
import { leaveGuard } from './3.Guards/leave.guard';
import { adminGuard } from './3.Guards/admin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cocktails-by-first-letter/a' },
  { path: '401', component: NotAuthorizedPageComponent },
  { path: '404', component: NotFoundPageComponent },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canActivateChild: [adminGuard]
  },
  {
    path: 'cocktails-by-ingredient/:type', component: CocktailsListComponent,
    canDeactivate: [leaveGuard]
  },
  {
    path: 'cocktails-by-first-letter/:fl', component: CocktailsListComponent,
    canDeactivate: [leaveGuard]
  },
  {
    path: 'cocktail-details/:id/:name', component: CocktailDetailsComponent,
    canActivate: [AuthGuard], resolve: { cocktail: cocktailDetailsResolver }
  },
  { path: 'ingredients', component: IngredientsListComponent },
  {
    path: 'ingredient-details/:name', component: IngredientDetailsComponent,
    canActivate: [AuthGuard], resolve: { ingredient: ingredientDetailsResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
