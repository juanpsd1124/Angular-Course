import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];

  constructor( private paisService: PaisService ){}

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
    .subscribe(
      {
        next: (paises) => { 
          this.paises = paises;
          console.log(this.paises); 
        },
        error: (err) => { 
          this.hayError = true;
          this.paises = [];
          // console.log('Error');
          // console.log(err)
        }
      });
  };

  sugerencias( termino: string ){
    this.hayError = false;
    //TODO: Crear Sugerencias
  } 

}

