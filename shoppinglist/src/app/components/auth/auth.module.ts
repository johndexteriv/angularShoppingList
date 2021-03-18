import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from 'src/app/core/routes/auth-routing.module';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, FormsModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
