import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";

import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("ingredientAmount", { static: false }) ingredientAmount;
  @ViewChild("ingredientName", { static: false }) ingredientName;
  ingredient: Ingredient;
  @Output() newIngredientEvent = new EventEmitter<Ingredient>();
  constructor() {}
  ngOnInit() {}
  addIngredient() {
    this.newIngredientEvent.emit(
      new Ingredient(
        this.ingredientName.nativeElement.value,
        this.ingredientAmount.nativeElement.value
      )
    );
  }
}
