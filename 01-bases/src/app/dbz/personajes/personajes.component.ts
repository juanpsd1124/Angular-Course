import { Component } from '@angular/core';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  get personajes(){
      return this.dbzService.personajes;
  }

  constructor( private dbzService: dbzService ){
   
  }

}
