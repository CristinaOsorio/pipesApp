import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {

  // i18nSelect
  name: string = 'MaKry-Oz';
  gener: 'F' | 'M' = 'F';
  invitationMap = {
    'F': 'invitarla',
    'M': 'invitarlo'
  };
  isFemenine = true;

  // i18nPlural
  clients: string[]  = [
    'Maria', 'Yony', 'Jaime', 'Karen'
  ];

  clientsMap = {
    '=0': 'no se tiene ningun cliente',
    '=1': ' se tiene ha un cliente',
    'other': ' se tiene # clientes',
  }

  icon: string = 'pi pi-trash';

  changePerson(): void {
    this.gener =  this.gener == 'F' ? 'M' : 'F';
    this.name = this.gener == 'M' ? 'Rodrigo' : 'Katherine';
  }

  addFunction(): void {
    (this.clients.length === 0 ) ? this.addClients() : this.deleteClient();
  }

  changeIcon(): string {
    return this.clients.length === 0 ? 'pi pi-user-plus' : 'pi pi-trash';
  }

  private deleteClient(): void {
    this.clients.pop();
  }

  private addClients(): void {
    this.clients = [
      'Maria', 'Yony', 'Jaime', 'Karen'
    ];
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Makry',
      edad:35,
      direccion: 'Benito Juarez, Hidalgo' 
  }

  //JsonPipe
  heroes= [
    {
      name: 'Superman', 
      canFly: true
    },
    {
      name: 'Robin', 
      canFly: false
    },
    {
      name: 'Aquaman', 
      canFly: false
    },
    
  ]


}
