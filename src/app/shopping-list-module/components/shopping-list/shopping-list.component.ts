import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient.interfae';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[] = [
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

  ngOnInit(): void {
  }

}
