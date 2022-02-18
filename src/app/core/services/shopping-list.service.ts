import { Ingredient } from './../models/ingredient.interface';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  public ingredientsChanges: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  private _ingredients: Ingredient[] = [
    { 
      name: 'apples',
      amount: 10 
    },
    { 
      name: 'tomatoes',
      amount: 10 
    }
  ];
  constructor() { }

  getIngredients() {
    return this._ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients = [...this._ingredients, ingredient];
    this.ingredientsChanges.emit(this._ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientsChanges.emit(this._ingredients.slice());
  }
}
