import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe.interface';
import { RecipesService } from 'src/app/core/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  public recipes: Recipe[];

  public selectedRecipe: Recipe;

  constructor(private _recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this._recipesService.getRecipes();

    this._recipesService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    })
  }

}
