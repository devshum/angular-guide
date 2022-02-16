import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  public onAddItem() {
    const newIngredient = { name: this.nameInputRef.nativeElement.value, 
                            amount: this.amountInputRef.nativeElement.value}

    this.ingredientAdded.emit(newIngredient)
  }

  public onDeleteItem() {

  }

  public onClearItem() {

  }
}
