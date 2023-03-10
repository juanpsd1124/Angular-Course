import { Injectable } from '@angular/core'
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class dbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        },
      ];
      get personajes(): Personaje[] {
        return [...this._personajes];
      }

    constructor() {
        console.log('Servicio Inicializado')
    }

    agregarPersonaje( personaje: Personaje ){
        this._personajes.push( personaje);
    };





}
