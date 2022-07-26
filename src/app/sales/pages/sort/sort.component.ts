import { Component } from '@angular/core';
import { Product, Category } from '../../interfaces/product.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent {
  isUppercase = true;
  word: string = 'desaRRollador';
  orderBy: keyof Product | null = null;
  direction: 'asc' | 'desc' = 'asc';

  products: Product[]= [
    {
      code: 'prod_1',
      name: 'Camisa',
      category: Category.ropa,
      isActive: true,
      quantity: 1200,
    },
    {
      code: 'prod_4',
      name: 'Pantalon',
      category: Category.accesorios,
      isActive: false,
      quantity: 200,
    },
    {
      code: 'prod_3',
      name: 'Mocasines',
      category: Category.calzado,
      isActive: false,
      quantity: 500,
    },
    {
      code: 'prod_2',
      name: 'Pulseras',
      category: Category.accesorios,
      isActive: true,
      quantity: 340,
    },
    {
      code: 'prod_5',
      name: 'Colares',
      category: Category.ropa,
      isActive: true,
      quantity: 900,
    },
  ];


    changeWord() {
      this.isUppercase = !this.isUppercase;
    }

    changeOrderBy(orderBy: keyof Product | null) {
      this.orderBy = orderBy;
      this.direction = this.direction === 'desc' ? 'asc' : 'desc';
    }

}
