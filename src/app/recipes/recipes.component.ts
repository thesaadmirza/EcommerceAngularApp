import { Component, OnInit, Input } from "@angular/core";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { Recipe } from "./recipe.model";
@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  currentRecipe: Recipe;
  constructor() {}

  ngOnInit() {}
  updateRecipeView(recipe: Recipe) {
    this.currentRecipe = recipe;
  }
}
