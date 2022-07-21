import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent implements OnInit {

  // i18nSelect
  name: string = 'MaKry-Oz';
  gener: 'F' | 'M' = 'M';
  invitationMap = {
    'F': 'invitarla',
    'M': 'invitarlo'
  };

  // i18nPlural
  clients: string[]  = [
    'Maria', 'Pedro', 
  ];

  clientsMap = {
    '=0': 'no se tiene ningun cliente esperando.',
    '=1': ' se tiene ha un cliente esperando.',
    'other': ' se tiene # clientes esperando.',
  }


  constructor() { }

  ngOnInit(): void {
  }

}
