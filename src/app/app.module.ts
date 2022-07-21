import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { RouterModule } from '@angular/router';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

// Cambiar el locale de la app

import localEs from '@angular/common/locales/es-Mx';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs)
registerLocaleData(localFr)

@NgModule({
  declarations: [
    AppComponent
  ], 
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    SalesModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-Mx' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
