import { Component, OnInit } from '@angular/core';
import { HeroesResponse } from '../../interfaces/heroes.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  termino: string  = '';
  heroes: HeroesResponse[] = [];
  heroeSeleccionado: HeroesResponse | undefined;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }


  buscando() {

    this.heroesService.getSugerencias( this.termino.trim() )
    .subscribe( heroes => this.heroes = heroes );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      console.log('No hay valor')
      return;
    }

    const heroe: HeroesResponse = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroeById( heroe.id! )
      .subscribe( heroe => this.heroeSeleccionado = heroe );
  }

}

