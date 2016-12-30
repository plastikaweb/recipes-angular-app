import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe';

@Component( {
    selector: 'rb-recipe-list',
    templateUrl: './recipe-list.component.html'
} )
export class RecipeListComponent implements OnInit {
    @Output() recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe( 'Dummy', 'Dummy', 'https://www.nutella.com/documents/8340659/8365575/nocciola.png/f393b2c8-2c86-4759-817b-ff6604864a16', [] ),
        new Recipe( 'Kaa', 'Kaaaa', 'http://www.worldofzing.com/wp-content/uploads/2014/06/Chinese_White-chillli-120x120.jpg', [] ),

    ];

    constructor() {
    }

    ngOnInit() {
    }

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }

}
