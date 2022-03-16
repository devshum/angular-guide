import { takeUntil } from 'rxjs/operators';
import { RecipesService } from 'src/app/core/services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  @Input() recipes: Recipe[];
  private _unsibscribe = new Subject();
  
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _recipesService: RecipesService
  ) { }

  ngOnInit(): void {
    this._recipesService.recipesChanged.pipe(takeUntil(this._unsibscribe)).subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
  }

  onNewRecipe() {
    this._router.navigate(['new'], { relativeTo: this._activatedRoute});
  }

  ngOnDestroy(): void {
    this._unsibscribe.next();
  }
}
