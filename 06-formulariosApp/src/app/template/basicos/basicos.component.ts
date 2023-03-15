import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm ;

  initForm = {
    producto: 'RTX 4080 Ti',
    precio: 10,
    existencias: 10
  }

  // guardar( miFormulario: NgForm){
  //   console.log( miFormulario ); 
  // }
nombreValido(): boolean{
  return this.miFormulario?.controls['producto']?.invalid 
         && this.miFormulario?.controls['producto']?.touched
}

numeroValido(): boolean{
  return this.miFormulario?.controls['precio']?.touched
          && this.miFormulario?.controls['precio']?.value < 0;
}

  guardar(){
    console.log( 'Posteo Correcto' );
   
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });

  }

}
