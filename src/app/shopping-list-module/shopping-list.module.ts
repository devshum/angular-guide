import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';
import { ShoppingListComponent } from './containers/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    EditComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ShoppingListComponent
  ]
  
})
export class ShoppingListModule { }
