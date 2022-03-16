import { environment } from './../../../environments/environment';
import { RecipesService } from 'src/app/core/services/recipes.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private _apiUrl = environment.apiUrl;

  constructor(
    private _http: HttpClient,
    private _recipesService: RecipesService
  ) { }

  storeRecipes(): Observable<Recipe[]> {
    const recipes = this._recipesService.getRecipes();
    return this._http.put<Recipe[]>(this._apiUrl, recipes);
  }
}
