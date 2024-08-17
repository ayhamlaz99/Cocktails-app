import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from '../1.Interfaces/ingredient';


@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.css']
})
export class IngredientDetailsComponent {

  ingredient!: Ingredient;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.data.subscribe(({ ingredient }) => this.ingredient = ingredient);
  }

}