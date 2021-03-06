import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe.interface';
import { RecipesService } from 'src/app/core/services/recipes.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private _recipeService: RecipesService) { }

  ngOnInit(): void {
  }
}
