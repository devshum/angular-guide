import { RecipesService } from 'src/app/core/services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() recipes: Recipe[];
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _recipesService: RecipesService
  ) { }

  ngOnInit(): void {
    this._recipesService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
  }

  onNewRecipe() {
    this._router.navigate(['new'], { relativeTo: this._activatedRoute});
  }
}
