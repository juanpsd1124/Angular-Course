import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'juan';
  nombreUpper: string = 'JUAN';
  nombreCompleto: string = 'juAN pOSAdA';

  fecha: Date = new Date();

}
