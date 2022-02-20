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
@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    RecipesComponent,
    DetailsComponent,
    RecipeComponent,
    DropdownDirective,
    RecipeStartComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    RecipesComponent
  ]
})
export class RecipesModule { }
