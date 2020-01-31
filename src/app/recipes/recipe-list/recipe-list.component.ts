import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() setRecipe = new EventEmitter<Object>();
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
  constructor() {}

  ngOnInit() {}
  ChangeRecipe(recipe: Recipe) {
    this.setRecipe.emit(recipe);
  }
}
