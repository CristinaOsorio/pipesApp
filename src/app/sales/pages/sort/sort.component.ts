import { Component } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent {
  isUppercase = true;
  products: any[]= [];

  word: string = 'desaRRollador'

    changeWord() {
      this.isUppercase = !this.isUppercase;
    }

}
