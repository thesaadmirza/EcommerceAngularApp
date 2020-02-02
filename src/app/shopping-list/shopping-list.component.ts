import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
  providers: [shoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingListService: shoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
