import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from '../core/services/auth.service';
import { ButtonModule } from '../core/components/button/button.module';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [CommonModule, AuthRoutingModule, MatCardModule, FormsModule, ReactiveFormsModule, ButtonModule],
  providers: [{ provide: AuthService, useClass: AuthService }],
})
export class AuthModule {}
