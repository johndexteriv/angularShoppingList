import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './core/routes/app-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { RecipesModule } from './components/recipes/recipes.module';
import { ShoppinglistModule } from './components/shoppinglist/shoppinglist.module';
import { SharedModule } from './core/shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [AppComponent, AuthComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipesModule,
    ShoppinglistModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
