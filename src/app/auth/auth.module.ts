import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ButtonModule } from '../core/components/button/button.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [CommonModule, AuthRoutingModule, MatCardModule, FormsModule, ReactiveFormsModule, ButtonModule],
})
export class AuthModule {}
