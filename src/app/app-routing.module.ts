import { AuthComponent } from './auth/auth/auth.component';
import { RecipeEditComponent } from './recipes-module/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes-module/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list-module/containers/shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes-module/containers/recipes/recipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './recipes-module/components/details/details.component';

const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    redirectTo: 'recipes'
  },
  { path: 'recipes', component: RecipesComponent, 

    children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: DetailsComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ] },

  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
