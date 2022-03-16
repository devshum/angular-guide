import { RecipesService } from 'src/app/core/services/recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;

  constructor(
    private _recipeService: RecipesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) 
  { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.recipeId = params.id;

      this.recipe = this._recipeService.getRecipe(this.recipeId);
    })
  }

  onAddToShoppingList() {
    this._recipeService.addIngredientsToShopingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this._router.navigate(['edit'], { relativeTo: this._activatedRoute })
  }

  onDeletetRecipe() {
    this._recipeService.deleteRecipe(this.recipeId);

    this._router.navigate(['/recipes']);
  }
}
