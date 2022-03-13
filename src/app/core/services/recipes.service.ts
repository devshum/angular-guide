import { ShoppingListService } from './shopping-list.service';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.interface';
import { Ingredient } from '../models/ingredient.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  public recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();
  
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

  constructor(private _sl: ShoppingListService) { }

  getRecipes() {
    return this._recipes.slice();
  }

  getRecipe(id: number) {
    return this._recipes[id];
  }

  addIngredientsToShopingList(ingredients: Ingredient[]) {
    this._sl.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this._recipes = [...this._recipes, recipe];
    this.recipesChanged.next(this._recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this._recipes[index] = newRecipe;
    this.recipesChanged.next(this._recipes.slice());
  }
}
