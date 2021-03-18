import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppinglistRoutingModule } from 'src/app/core/routes/shoppinglist-routing.module';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { ShoppinglistComponent } from './shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglistedit/shoppinglistedit.component';

@NgModule({
  declarations: [ShoppinglistComponent, ShoppinglisteditComponent],
  imports: [RouterModule, SharedModule, FormsModule, ShoppinglistRoutingModule],
})
export class ShoppinglistModule {}
