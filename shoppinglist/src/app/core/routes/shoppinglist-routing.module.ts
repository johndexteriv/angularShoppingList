import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppinglistComponent } from 'src/app/components/shoppinglist/shoppinglist.component';

//Because it is only one route you could in theory house it in shoppinglist module imports and skip this file.
const routes: Routes = [{ path: '', component: ShoppinglistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppinglistRoutingModule {}
