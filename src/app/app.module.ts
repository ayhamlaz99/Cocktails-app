import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NotAuthorizedPageComponent } from './not-authorized-page/not-authorized-page.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';

import { CocktailsService } from './4.Services/cocktails.service';
import { HighlightDirective } from './2.Directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    NotFoundPageComponent,
    CocktailDetailsComponent,
    HighlightDirective,
    IngredientsListComponent,
    IngredientDetailsComponent,
    NotAuthorizedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CocktailsService,
    { provide: 'baseUrl', useValue: environment.baseUrl },
    { provide: 'apiUrl', useValue: environment.apiUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
