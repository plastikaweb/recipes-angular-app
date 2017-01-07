import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from './shopping-list.service';

@Component( {
    selector: 'rb-shopping-list-add',
    templateUrl: './shopping-list-add.component.html'
} )
export class ShoppingListAddComponent implements OnInit {
    isAdd = true;
    item: Ingredient;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit() {
    }

    onSubmit(ingredient: Ingredient) {
        if (!this.isAdd) {

        } else {
            this.item = ingredient;
            this.shoppingListService.addItem( ingredient );
        }
    }

}
