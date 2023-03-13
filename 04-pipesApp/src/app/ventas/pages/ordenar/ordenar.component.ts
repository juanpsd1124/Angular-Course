import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {

  enMayusculas: boolean = false;
  orderBy: string = 'nombre';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuelta: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuelta: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuelta: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuelta: true,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuelta: true,
      color: Color.verde
    }
  ]

  toogleMayusculas(){
    this.enMayusculas = !this.enMayusculas
  }

  cambiarOrden( valor: string ) {
    this.orderBy = valor;

  }

}
