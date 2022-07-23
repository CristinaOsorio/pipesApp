import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product.interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: Product[],  orderBy: keyof Product | null = null, direction: 'asc' | 'desc' = 'asc'): Product[] {
    const firstValue = direction === 'asc' ? 1 : -1 ;
    const secondValue = direction === 'asc' ? -1 : 1 ;
    return (orderBy)  
      ? products.sort((a: Product, b: Product) => ((a[orderBy] > b[orderBy] ) ? firstValue : secondValue))
      : products;
  }  

}
