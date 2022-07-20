import { SortComponent } from './sales/pages/sort/sort.component';
import { BasicComponent } from './sales/pages/basic/basic.component';
import { NoCommonsComponent } from './sales/pages/no-commons/no-commons.component';
import { NumberComponent } from './sales/pages/number/number.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: BasicComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumberComponent
  },
  {
    path: 'no-comunes',
    component: NoCommonsComponent
  },
  {
    path: 'ordenar',
    component: SortComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRouterModule { }
