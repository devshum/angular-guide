import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './components/edit/edit.component';
import { ShoppingListComponent } from './containers/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    EditComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShoppingListComponent
  ]
  
})
export class ShoppingListModule { }
