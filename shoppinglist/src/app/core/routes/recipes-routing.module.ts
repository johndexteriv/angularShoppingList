import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/components/auth/auth.guard';
import { RecipeDetailComponent } from 'src/app/components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from 'src/app/components/recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from 'src/app/components/recipes/recipe-start/recipe-start.component';
import { RecipesResolverService } from 'src/app/components/recipes/recipes-resolver.service';
import { RecipesComponent } from 'src/app/components/recipes/recipes.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
