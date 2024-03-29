import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesResponse, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width:100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent {

publishers = [
  {
    id:'DC Comics',
    desc: 'DC - Comics'
  },
  {
    id:'Marvel Comics',
    desc: 'Marvel - Comics'
  }
]

heroe: HeroesResponse = {
  superhero: '',
  alter_ego: '',
  characters: '',
  first_appearance: '',
  publisher: Publisher.DCComics,
  alt_img: ''
}

constructor( private HeroesService: HeroesService,
             private activatedRoute: ActivatedRoute,
             private router: Router,
             private snackBar: MatSnackBar,
             public dialog: MatDialog ) {}

ngOnInit(): void{

  if( !this.router.url.includes('editar') ){
    return;
  }

  this.activatedRoute.params
  .pipe(
    switchMap( ({id}) => this.HeroesService.getHeroeById( id )) 
  )
  .subscribe( heroe => this.heroe = heroe )

}

guardar(){
  if( this.heroe.superhero.trim().length === 0){
    return;
  }
  if ( this.heroe.id ){
    //Actualizar
    this.HeroesService.updateHeroe( this.heroe )
    .subscribe( heroe => 
      this.mostrarSnackBar('Registro Actualizado'))
  } else {
    //Crear
    this.HeroesService.addHeroe( this.heroe )
    .subscribe( heroe => {
      this.router.navigate(['/heroes/editar', heroe.id]);
      this.mostrarSnackBar('Registro Creado')
      // console.log( 'Respuesta', heroe)
    })
  }
}

borrar(){

  const dialog = this.dialog.open( ConfirmarComponent, {
    width: '550px',
    data: this.heroe
  } );

  dialog.afterClosed().subscribe(
    (result => {
      if( result ){
        this.HeroesService.deleteHeroe( this.heroe.id! )
        .subscribe( resp => {
          this.router.navigate( ['/heroes'])
        });
      }
      // console.log(result);
    }) 
  );


  // this.HeroesService.deleteHeroe( this.heroe.id !)
  //   .subscribe( resp => {
  //     this.router.navigate(['/heroes'])
  //   });
}

mostrarSnackBar( mensaje: string){
  this.snackBar.open( mensaje, 'Cerrar', {
    duration: 2500
  });
}

}
