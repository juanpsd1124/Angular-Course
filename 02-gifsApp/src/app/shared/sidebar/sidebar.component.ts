import { Component } from '@angular/core';
import { GifServiceService } from 'src/app/gifs/services/gif-service.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get historial(){
    return this.GifServiceService.historial;
  }

  constructor ( private GifServiceService: GifServiceService ){};

  buscar( termino: string){
    this.GifServiceService.buscarGifs(termino);
  }

}
