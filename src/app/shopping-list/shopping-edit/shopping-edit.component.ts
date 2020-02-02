import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { Ingredient } from "src/app/shared/ingredient.model";
import { shoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("ingredientAmount", { static: false })
  ingredientAmount: ElementRef;
  @ViewChild("ingredientName", { static: false }) ingredientName: ElementRef;
  ingredient: Ingredient;
  constructor(private shoppingListService: shoppingListService) {}
  ngOnInit() {}
  addIngredient() {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.ingredientName.nativeElement.value,
        this.ingredientAmount.nativeElement.value
      )
    );
  }
}
