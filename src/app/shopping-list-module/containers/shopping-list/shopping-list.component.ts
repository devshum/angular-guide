import { ShoppingListService } from './../../../core/services/shopping-list.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[];
  private _unsubscribe = new Subject();

  constructor(private _shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this._shoppingService.getIngredients();
    this._shoppingService.ingredientsChanges.pipe(takeUntil(this._unsubscribe))
                                            .subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }

  onEditItem(index: number): void {
    this._shoppingService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
  }
}
