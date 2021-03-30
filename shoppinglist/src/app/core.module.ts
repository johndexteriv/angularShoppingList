import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './components/auth/auth-interceptor.service';
import { EnvServiceProvider } from './core/services/envservice/env.service.provider';
import { RecipeService } from './core/services/recipeservice/recipe.service';
import { ShoppingListService } from './core/services/shoppinglistservice/shoppinglist.service';

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    EnvServiceProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
