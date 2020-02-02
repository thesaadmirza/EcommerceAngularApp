import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class recipeService {
  selectedRecipeEvent = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "A test Recipie",
      "Its description",
      "https://www.delightishfood.com/wp-content/uploads/2019/12/Fish-recipe.jpg"
    ),
    new Recipe(
      "A test Recipie 2",
      "Its description 2",
      "https://www.delightishfood.com/wp-content/uploads/2019/12/Fish-recipe.jpg"
    )
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
