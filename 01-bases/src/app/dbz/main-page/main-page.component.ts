import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces'


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo : Personaje ={
    nombre: 'Maestro Rochi',
    poder: 1000
  }

  

    

}
