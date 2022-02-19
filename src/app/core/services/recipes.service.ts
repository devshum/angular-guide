import { ShoppingListService } from './shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.interface';
import { Ingredient } from '../models/ingredient.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private _recipes: Recipe[] = [
    {
      name: 'Test recipe',
      description: 'Test description',
      imageUrl: 'https://thumbs.dreamstime.com/b/gourmet-tasty-italian-penne-pasta-plate-close-up-spicy-tomato-herbs-white-served-top-wooden-table-58667798.jpg',
      ingredients: [{ name: 'Test1', amount: 4 }]
    },
    {
      name: 'Test recipe',
      description: 'Test description',
      imageUrl: 'https://thumbs.dreamstime.com/b/gourmet-tasty-italian-penne-pasta-plate-close-up-spicy-tomato-herbs-white-served-top-wooden-table-58667798.jpg',
      ingredients: [{ name: 'Test2', amount: 16  }]
    }
  ];

  public recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(private _sl: ShoppingListService) { }

  getRecipes() {
    return this._recipes.slice();
  }

  addIngredientsToShopingList(ingredients: Ingredient[]) {
    this._sl.addIngredients(ingredients);
  }
}
