import {Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from '../recipe';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {RecipeService} from '../recipe.service';

@Component( {
    selector: 'rb-recipe-detail',
    templateUrl: './recipe-detail.component.html'
} )
export class RecipeDetailComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    private recipeIndex: number;
    selectedRecipe: Recipe;

    constructor(private shoppingListService: ShoppingListService,
                private route: ActivatedRoute,
                private router: Router,
                private recipeService: RecipeService) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this.recipeIndex = params['id'];
                this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onEdit() {
        this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
    }

    onDelete() {
        this.recipeService.deleteRecipe(this.selectedRecipe);
        this.router.navigate(['/recipes']);
    }

    onAddToShoppingList() {
        this.shoppingListService.addItems( this.selectedRecipe.ingredients );
    }

}
