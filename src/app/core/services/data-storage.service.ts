import { AuthService } from './auth.service';
import { environment } from './../../../environments/environment';
import { RecipesService } from 'src/app/core/services/recipes.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.interface';
import { Observable } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private _apiUrl = environment.apiUrl;

  constructor(
    private _http: HttpClient,
    private _recipesService: RecipesService,
    private _authService: AuthService
  ) { }

  storeRecipes(): Observable<Recipe[]> {
    const recipes = this._recipesService.getRecipes();
    return this._http.put<Recipe[]>(this._apiUrl, recipes);
  }

  fetchRecipes(): void {
    this._authService.user.pipe(
      take(1), 
      exhaustMap((user: any) => {
        return this._http.get<Recipe[]>(
          this._apiUrl,
          {
            params: new HttpParams().set('auth', user.token)
          }
        );
      }),
      map((recipes: any) => {
        return recipes.map(recipe => {
          return { 
            ...recipe, 
            ingredients: recipe.ingredients ? recipe.ingredients : [] 
          };
        });
      })).subscribe(recipes => {
      this._recipesService.setRecipes(recipes);
      console.log(recipes);
    })
  }
}
