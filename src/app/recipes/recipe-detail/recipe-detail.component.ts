import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { shoppingListService } from "src/app/shopping-list/shopping-list.service";
import { recipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input("currentRecipe") recipe: Recipe;
  constructor(private recipeService: recipeService) {}
  ngOnInit() {}
  addIngredients() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
