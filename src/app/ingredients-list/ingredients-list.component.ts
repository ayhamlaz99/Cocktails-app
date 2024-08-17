import { Component } from '@angular/core';
import { CocktailsService } from '../4.Services/cocktails.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent {

  ingredients$: Observable<string[]>;

  constructor(private srv: CocktailsService) {
    this.ingredients$ = this.srv.getIngredientsList();
  }

  ngOnInit(): void {
  }
}
