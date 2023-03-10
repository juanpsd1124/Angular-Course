import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifServiceService } from '../services/gif-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor ( private GifServiceService: GifServiceService ){}

  buscar(){

    const valor = this.txtBuscar.nativeElement.value;

    if ( valor.trim().length === 0 ){
      return;
    }

    this.GifServiceService.buscarGifs( valor);
    
    this.txtBuscar.nativeElement.value = ''
  };

  

}
