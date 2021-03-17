import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../services/recipeservice/recipe.service';
import { EnvService } from '../services/envservice/env.service';

import { Recipe } from '../../components/models/recipe.model';
import { map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/components/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private env: EnvService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.env.apiUrl, recipes).subscribe((response) => {
      console.log('store recipes', response);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.env.apiUrl).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
