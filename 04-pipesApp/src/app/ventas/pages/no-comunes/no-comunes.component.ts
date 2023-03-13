import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

    nombre: string = 'JuanDavid';
    genero: string = 'femenino';

    invitacionMapa = {
      'masculino': 'invitarlo',
      'femenino': 'invitarla,'
    }

    //i18nPlural
    clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Hernando', 'Eduardo', 'Fernando'];
    clientesMapa= {
      '=0' : 'No tenemos clientes esperando',
      '=1' : 'Tenemos un cliente esperando',
      'other' : 'Tenemos # clientes esperando'
    }

    cambiarCliente(){
      this.nombre = 'Melissa';
      this.genero = 'femenino'
    }

    borrarCliente(){
      this.clientes.pop();
    }

    // KeyValue Pipe

    persona = {
      nombre: 'Fernando',
      edad: 35,
      direccion: 'Ottawa, Canadá'
    } 

    // Json Pipe

    heroes = [
        {
          nombre: 'Superman',
          vuela: true
        },
        {
          nombre: 'Robin',
          vuela: false
        },
        {
          nombre: 'Aquaman',
          vuela: false
        },
    ]

    //Async Pipe
    miObservable = interval(1000); //0,1,2,3,4,5,6

    valorPromesa = new Promise ( (resolve, reject) => {

      setTimeout( () => {
        resolve( 'Tenemos Data de promesa');
      }, 3500);

    });

}
