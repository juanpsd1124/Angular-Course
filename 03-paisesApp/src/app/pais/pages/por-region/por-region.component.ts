import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  hayError: boolean = false;
  paises : Country[] = [];
  regiones: string[] = [ 'EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';

  constructor( private paisService: PaisService ){}

  getClaseCSS( region: string ): string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  activarRegion( region: string){

    if( region === this.regionActiva){
      return;
    }

    this.regionActiva = region;
    this.paises = [];
  }

  buscar(){
    this.hayError = false;
    // console.log(this.regionActiva);
    this.paisService.buscarPorRegion(this.regionActiva)
    .subscribe(
      {
        next: (paises) => { 
          this.paises = paises;
          // console.log(this.paises); 
        },
        error: (err) => { 
          this.hayError = true;
          this.paises = [];
          // console.log('Error');
          // console.log(err)
        }
      });
  };

}
