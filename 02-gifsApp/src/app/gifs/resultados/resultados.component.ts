import { Component } from '@angular/core';
import { GifServiceService } from '../services/gif-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  get resultados(){
    return this.GifServiceService.resultados;
  }

  constructor ( private GifServiceService: GifServiceService ){}

}
