import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private _recipes: Recipe[] = [
    {
      name: 'Test recipe',
      description: 'Test description',
      imageUrl: 'https://thumbs.dreamstime.com/b/gourmet-tasty-italian-penne-pasta-plate-close-up-spicy-tomato-herbs-white-served-top-wooden-table-58667798.jpg'
    },
    {
      name: 'Test recipe',
      description: 'Test description',
      imageUrl: 'https://thumbs.dreamstime.com/b/gourmet-tasty-italian-penne-pasta-plate-close-up-spicy-tomato-herbs-white-served-top-wooden-table-58667798.jpg'
    }
  ];

  public recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  getRecipes() {
    return this._recipes.slice();
  }

  constructor() { }
}
