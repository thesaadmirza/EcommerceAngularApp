import { Component, OnInit, Input } from "@angular/core";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { Recipe } from "./recipe.model";
import { recipeService } from "./recipe.service";
@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
  providers: [recipeService]
})
export class RecipesComponent implements OnInit {
  currentRecipe: Recipe;
  constructor(private recipeService: recipeService) {}

  ngOnInit() {
    this.recipeService.selectedRecipeEvent.subscribe((recipe: Recipe) => {
      this.currentRecipe = recipe;
    });
  }
}
