import { RecipesService } from './../../core/services/recipes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _recipeService: RecipesService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.editMode = params.id !== undefined;
      this._initForm();
      console.log(this.editMode);
    })
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  private _initForm() {
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';

    if(this.editMode) {
      const recipe = this._recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImage = recipe.imageUrl;
      recipeDescription = recipe.description;
    }

    this.recipeForm = this._formBuilder.group({
      name: [recipeName, Validators.required],
      image: [recipeImage, Validators.required],
      description: [recipeDescription, Validators.required],
    })
  }

}
