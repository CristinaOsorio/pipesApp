import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumberComponent } from './pages/number/number.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicComponent } from './pages/basic/basic.component';
import { SortComponent } from './pages/sort/sort.component';



@NgModule({
  declarations: [
    NumberComponent,
    NoCommonsComponent,
    BasicComponent,
    SortComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumberComponent,
    NoCommonsComponent,
    BasicComponent,
    SortComponent
  ],
})
export class SalesModule { }
