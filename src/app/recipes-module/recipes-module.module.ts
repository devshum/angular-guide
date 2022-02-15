import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailsComponent } from './components/details/details.component';
import { RecipeComponent } from './components/recipe/recipe.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    RecipesComponent,
    DetailsComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    RecipesComponent
  ]
})
export class RecipesModule { }
