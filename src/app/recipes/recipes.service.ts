import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Cheeseburger',
            'A juicy burger with cheese.',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/800px-Cheeseburger.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Bun', 1),
                new Ingredient('Cheese', 1)
            ]),
        new Recipe('Grilled Cheese',
            'This is a test 2.',
            'https://upload.wikimedia.org/wikipedia/commons/8/89/Grilled_cheese_sandwich.jpg',
            [
                new Ingredient('Cheese', 1),
                new Ingredient('Bread', 2)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}