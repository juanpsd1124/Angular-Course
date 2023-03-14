import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroesResponse } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles:[`
    
  `]
})
export class ListadoComponent {

  heroes: HeroesResponse[] = [];

  constructor( private heroesService: HeroesService){}

  ngOnInit(): void {

    this.heroesService.getHeroes()
    .subscribe(
      {
        next: (resp) => { 
          // console.log(resp)
          this.heroes = resp; 
        },
        error: (err) => { 
          
        }
      });


  }

}
