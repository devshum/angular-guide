import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe.interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  public recipes: Recipe[] = [
    {
      name: 'Test recipe',
      description: 'Test description',
      imageUrl: 'https://thumbs.dreamstime.com/b/gourmet-tasty-italian-penne-pasta-plate-close-up-spicy-tomato-herbs-white-served-top-wooden-table-58667798.jpg'
    },
    {
      name: 'Test recipe',
      description: 'Test description',
      imageUrl: 'https://thumbs.dreamstime.com/b/gourmet-tasty-italian-penne-pasta-plate-close-up-spicy-tomato-herbs-white-served-top-wooden-table-58667798.jpg'
    }
  ];

  public selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
