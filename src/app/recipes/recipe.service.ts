import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from '../shared/ingredient';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
    recipesChanged = new EventEmitter<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe( 'Dummy', 'Dummy', 'https://www.nutella.com/documents/8340659/8365575/nocciola.png/f393b2c8-2c86-4759-817b-ff6604864a16', [
            new Ingredient( 'French fries', 2 ),
            new Ingredient( 'Pork Meat', 1 )
        ] ),
        new Recipe( 'Kaa', 'Kaaaa', 'http://www.worldofzing.com/wp-content/uploads/2014/06/Chinese_White-chillli-120x120.jpg', [] ),

    ];

    constructor(private http: Http) {
    }

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe) {
        this.recipes.splice( this.recipes.indexOf( recipe ), 1 );
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push( recipe );
    }

    editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
        this.recipes[this.recipes.indexOf( oldRecipe )] = newRecipe;
    }

    storeData(): Observable<any> {
        const body = JSON.stringify( this.recipes );
        const headers = new Headers( {
            'Content-Type': 'application/json'
        } );
        return this.http.put( 'https://recipebook-c272f.firebaseio.com/recipes.json', body, {
            headers: headers
        } );
    }

    fetchData(): any {
        return this.http.get( 'https://recipebook-c272f.firebaseio.com/recipes.json' )
            .map( (response: Response) => response.json() )
            .subscribe(
                (data: Recipe[]) => {
                    this.recipes = data;
                    this.recipesChanged.emit(this.recipes);
                }
            )
    }

}
