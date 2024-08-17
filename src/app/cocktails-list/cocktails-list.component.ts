import { ChangeDetectorRef, Component } from '@angular/core';
import { CocktailsService } from '../4.Services/cocktails.service';
import { Observable, switchMap } from 'rxjs';
import { Cocktail } from '../1.Interfaces/cocktail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent {

  cocktails$!: Observable<Cocktail[]>;
  type!: string | null;
  fl!: string | null;

  constructor(private srv: CocktailsService, private activatedRoute: ActivatedRoute, private cdr: ChangeDetectorRef) {
    this.cocktails$ = this.activatedRoute.paramMap.pipe(switchMap(param => {
      this.type = param.get('type');
      this.fl = param.get('fl');
      this.cdr.detectChanges();
      if (this.fl) return this.srv.getCocktailsListByFirstLetter(this.fl);
      else return this.srv.getCocktailsListByIngredients(this.type);
    }));
  }

  ngOnInit(): void {
  }
}
