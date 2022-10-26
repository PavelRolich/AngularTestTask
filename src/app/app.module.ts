import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './core/components/navbar/navbar.module';
import { SnackbarModule } from './core/components/snackbar/snackbar.module';

import { httpInterceptorProviders } from './core/interceptors';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { authReducer } from './core/store/reducers/auth.reducer';
import { productReducer } from './core/store/reducers/products.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NavbarModule,
    SnackbarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ auth: authReducer, product: productReducer }, {}),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
