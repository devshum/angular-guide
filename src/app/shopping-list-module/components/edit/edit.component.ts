import { ShoppingListService } from './../../../core/services/shopping-list.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private _sl: ShoppingListService) { }

  ngOnInit(): void {
  }

  public onAddItem() {
    const newIngredient = { name: this.nameInputRef.nativeElement.value, 
                            amount: this.amountInputRef.nativeElement.value}

    this._sl.addIngredient(newIngredient);
  }

  public onDeleteItem() {

  }

  public onClearItem() {

  }
}
