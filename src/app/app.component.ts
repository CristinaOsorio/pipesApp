import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'pipEs ApP';
  value: number = 10000;
  obj = {
    name: 'MaKryOz'
  }

  changeTitle() {
    console.log(this.title);
    console.log(this.value);
  }
}
