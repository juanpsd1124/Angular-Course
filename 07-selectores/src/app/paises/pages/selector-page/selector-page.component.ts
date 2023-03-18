import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent {

  miFormulario: FormGroup = this.fb.group({
    region: [ '', [Validators.required] ],
    pais: [ '', [Validators.required] ]
  })

  // Llenar Selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];

  constructor( private fb: FormBuilder,
               private paisesService: PaisesService){}

  ngOnInit(): void{
    
    this.regiones = this.paisesService.regiones;

    
    // //Cuando cambie la region
    // this.miFormulario.get('region')?.valueChanges
    //   .subscribe( region => {
    //     console.log(region);

    //     this.paisesService.getPaisesPorRegion( region )
    //       .subscribe( paises => {
    //         console.log(paises)
    //           this.paises = paises;
    //       })
    //   })
  }

  guardar(){
    console.log(this.miFormulario.value);
  }

}
