import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  // deletedHero:string[] = [] //Implementacion Juan 
  heroeBorrado: string = '';

  borrarHeroe():void{
    console.log('Borrando')
    // const index =  Math.round( ( ( Math.random() * this.heroes.length) ) )  //Implementacion Juan
    // this.deletedHero = this.heroes.splice(index, 1);   //Implementacion Juan
    this.heroeBorrado = this.heroes.shift() || '';

  }

}
