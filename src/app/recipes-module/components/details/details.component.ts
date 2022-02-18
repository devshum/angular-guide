import { RecipesService } from 'src/app/core/services/recipes.service';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private _recipeService: RecipesService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this._recipeService.addIngredientsToShopingList(this.recipe.ingredients);
  }
}
