import { RecipeStartComponent } from './recipes-module/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list-module/containers/shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes-module/containers/recipes/recipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './recipes-module/components/details/details.component';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'recipes', component: RecipesComponent, 

    children: [
    { path: '', component: RecipeStartComponent },
    { path: ':id', component: DetailsComponent }
  ] },

  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
