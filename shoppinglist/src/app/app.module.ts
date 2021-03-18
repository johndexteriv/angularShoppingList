import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './core/routes/app-routing.module';
import { RecipesModule } from './components/recipes/recipes.module';
import { ShoppinglistModule } from './components/shoppinglist/shoppinglist.module';
import { SharedModule } from './core/shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './components/auth/auth.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    RecipesModule,
    ShoppinglistModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
