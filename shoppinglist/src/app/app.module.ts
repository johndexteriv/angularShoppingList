import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './components/shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './core/utils/dropdown.directive';
import { ShoppingListService } from './core/services/shoppinglistservice/shoppinglist.service';
import { AppRoutingModule } from './core/routes/app-routing.module';
import { RecipeService } from './core/services/recipeservice/recipe.service';
import { EnvServiceProvider } from './core/services/envservice/env.service.provider';
import { AuthComponent } from './components/auth/auth.component';
import { LoadingSpinnerComponent } from './core/shared/loading-spinner/load-spinner.component';
import { AuthInterceptorService } from './components/auth/auth-interceptor.service';
import { AlertComponent } from './core/shared/alert/alert.component';
import { PlaceholderDirective } from './core/shared/placeholder/placeholder.directive';
import { RecipesModule } from './components/recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    AuthComponent,
    DropdownDirective,
    HeaderComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipesModule,
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
  entryComponents: [AlertComponent],
})
export class AppModule {}
