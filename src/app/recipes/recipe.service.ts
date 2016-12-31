import { Injectable } from '@angular/core';
import {Recipe} from './recipe';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe( 'Dummy', 'Dummy', 'https://www.nutella.com/documents/8340659/8365575/nocciola.png/f393b2c8-2c86-4759-817b-ff6604864a16', [] ),
    new Recipe( 'Kaa', 'Kaaaa', 'http://www.worldofzing.com/wp-content/uploads/2014/06/Chinese_White-chillli-120x120.jpg', [] ),

  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
