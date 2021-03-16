import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../services/recipeservice/recipe.service';
import { EnvService } from '../services/envservice/env.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private env: EnvService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.env.apiUrl, recipes).subscribe((response) => {
      console.log('store recipes', response);
    });
  }
}
