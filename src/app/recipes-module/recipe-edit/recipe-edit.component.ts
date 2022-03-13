import { RecipesService } from './../../core/services/recipes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    const newRecipe = {
      name: this.recipeForm.value.name,
      description: this.recipeForm.value.description,
      imageUrl: this.recipeForm.value.image,
      ingredients: this.recipeForm.value.ingredients
    }

    if(this.editMode) {
      this._recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this._recipeService.addRecipe(newRecipe)
    }
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      }) 
    );
  }

  get controls() { 
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  private _initForm() {
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this._recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImage = recipe.imageUrl;
      recipeDescription = recipe.description;

      if(recipe.ingredients) {
        for(let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = this._formBuilder.group({
      name: [recipeName, Validators.required],
      image: [recipeImage, Validators.required],
      description: [recipeDescription, Validators.required],
      ingredients: recipeIngredients
    })
  }
}
