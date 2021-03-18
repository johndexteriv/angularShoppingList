import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: () =>
      import('../../components/recipes/recipes.module').then(
        (mod) => mod.RecipesModule
      ),
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('../../components/shoppinglist/shoppinglist.module').then(
        (mod) => mod.ShoppinglistModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../../components/auth/auth.module').then((mod) => mod.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
