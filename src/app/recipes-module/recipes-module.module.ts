import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { RecipesComponent } from './containers/recipes/recipes.component';
import { DetailsComponent } from './components/details/details.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { DropdownDirective } from '../core/directives/dropdown.directive';
import { AppRoutingModule } from '../app-routing.module';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    RecipesComponent,
    DetailsComponent,
    RecipeComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    RecipesComponent
  ]
})
export class RecipesModule { }
