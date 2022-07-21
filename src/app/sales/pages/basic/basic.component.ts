import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent implements OnInit {

  titleLower: string = "makry";
  titleUpper: string = "MAKRY";
  titleComplete: string = "maKrY oZ";

  current: Date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
