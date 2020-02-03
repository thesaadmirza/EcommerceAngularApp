import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class recipeService {
  selectedRecipeEvent = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "Big Fat Burger",
      "Its description",
      "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2018/02/xxxl-fatburger.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "A test Recipie 2",
      "Its description 2",
      "https://www.delightishfood.com/wp-content/uploads/2019/12/Fish-recipe.jpg",
      [new Ingredient("Milk", 1), new Ingredient("Fries", 20)]
    )
  ];
  constructor(private shoppingListService: shoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(element => {
      this.shoppingListService.addIngredient(element);
    });
  }
}
