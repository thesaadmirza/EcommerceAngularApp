import { Ingredient } from "../shared/ingredient.model";

export class shoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 200),
    new Ingredient("Bananan", 5)
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
}
