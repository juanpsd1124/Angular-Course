import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { HeroesResponse } from '../../interfaces/heroes.interface';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius:5px;
    }
  `]
})
export class HeroeComponent {

  heroe!: HeroesResponse;

  constructor( private activatedRoute: ActivatedRoute,
               private HeroesService: HeroesService,
               private router: Router){}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.HeroesService.getHeroeById(id) )
      )
      .subscribe(
        {
          next: (  heroe ) => { 
            this.heroe = heroe;
          }
        });
      
  }

  regresar(){
    this.router.navigate(['heroes/listado']);

  }

}
