import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListService } from './core/services/shoppinglistservice/shoppinglist.service';
import { AppRoutingModule } from './core/routes/app-routing.module';
import { RecipeService } from './core/services/recipeservice/recipe.service';
import { EnvServiceProvider } from './core/services/envservice/env.service.provider';
import { AuthComponent } from './components/auth/auth.component';
import { AuthInterceptorService } from './components/auth/auth-interceptor.service';
import { RecipesModule } from './components/recipes/recipes.module';
import { ShoppinglistModule } from './components/shoppinglist/shoppinglist.module';
import { SharedModule } from './core/shared/shared.module';

@NgModule({
  declarations: [AppComponent, AuthComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipesModule,
    ShoppinglistModule,
    SharedModule,
  ],
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
  bootstrap: [AppComponent],
})
export class AppModule {}
