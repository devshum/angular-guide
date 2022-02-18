import { ShoppingListService } from './../../../core/services/shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[];

  constructor(private _shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this._shoppingService.getIngredients();
    this._shoppingService.ingredientsChanges.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }
}
