import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from 'src/app/components/models/ingredient.model';
import { Recipe } from '../../../components/models/recipe.model';
import { ShoppingListService } from '../shoppinglistservice/shoppinglist.service';

@Injectable()
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Panko Parmesan Salmon',
      'Salmon made with panko, which are very light and crunchy, mixed with Parmesan cheese. Its baked in the oven until the panko is nice and toasted.',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7052071.jpg&w=596&h=596&c=sc&poi=face&q=85',
      [
        new Ingredient('Salmon Fillets', 2),
        new Ingredient('Bread Crumbs', 15),
        new Ingredient('Lemons', 3.5),
        new Ingredient('Parmesan Cheese', 2),
      ]
    ),
    new Recipe(
      'Dr Pepper Pulled Pork',
      'A simple and tasty pulled pork recipe made in the Instant Pot® with the flavoring of Dr Pepper®.',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6303983.jpg&w=596&h=596&c=sc&poi=face&q=85',
      [
        new Ingredient('Pork Tenderloin', 4),
        new Ingredient('Dr Pepper', 2),
        new Ingredient('BBQ Sauce', 3),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.updateRecipesArray();
  }

  updateRecipesArray() {
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.updateRecipesArray();
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.updateRecipesArray();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.updateRecipesArray();
  }
}
