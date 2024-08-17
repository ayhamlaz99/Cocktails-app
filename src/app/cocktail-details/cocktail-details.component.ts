import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cocktail } from '../1.Interfaces/cocktail';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent {

  cocktail!: Cocktail;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.data.subscribe(({ cocktail }) => this.cocktail = cocktail);
  }

}