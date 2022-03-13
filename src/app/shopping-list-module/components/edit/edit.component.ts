import { takeUntil } from 'rxjs/operators';
import { ShoppingListService } from './../../../core/services/shopping-list.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient.interface';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  @ViewChild('form', { static: false }) form: NgForm;
  public editMode = false;
  private _unsusbscribe = new Subject();
  private _editedItemIndex: number;
  private _editedItem: Ingredient;

  constructor(private _sl: ShoppingListService) { }

  ngOnInit(): void {
    this._sl.startedEditing.pipe(takeUntil(this._unsusbscribe)).subscribe((index: number) => {
      this._editedItemIndex = index;
      this.editMode = true;
      this._editedItem = this._sl.getIngredient(index);

      this.form.setValue({
        name: this._editedItem.name,
        amount: this._editedItem.amount
      })
    });
  }

  public onSubmit(form: NgForm) {
    const value = form.value;

    const newIngredient = { name: value.name, 
                            amount: value.amount}

    if (this.editMode) {
      this._sl.updateIngredient(this._editedItemIndex, newIngredient);
    } else {
      this._sl.addIngredient(newIngredient);
    }

    this.editMode = false;
    form.reset();
  }

  public onDeleteItem() {
    this._sl.deleteIngredient(this._editedItemIndex);
  }

  public onClearItem() {
    this.form.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this._unsusbscribe.next();
  }
}
