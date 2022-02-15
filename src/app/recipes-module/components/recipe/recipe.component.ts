import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe.interface';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  
  constructor() { }

  ngOnInit(): void {
  }

}
