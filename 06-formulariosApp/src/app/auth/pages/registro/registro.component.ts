import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern ) ] ],
    email: [ '', [Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [this.emailValidator] ],
    username: [ '', [Validators.required, this.validatorService.noPuedeSerStrider ], [] ],
    password: [ '', [Validators.required, Validators.minLength(6)  ] ],
    password2: [ '', [Validators.required ] ]

  }, {
    validators: [ this.validatorService.camposIguales( 'password', 'password2')  ]
  })

  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;

    if( errors?.['required']){
      return 'Email es obligatorio';
    } else if ( errors?.['pattern']){
      return 'El valor ingresado no tiene formato de correo';
    } else if ( errors?.['emailTomado']){
      return 'El email ya fue tomado';
    }
    
    return '';
  }

  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService,
               private emailValidator: EmailValidatorService ){}

  ngOnInit(): void{

    this.miFormulario.reset({
      nombre: 'Fernando Herrera',
      email: 'test1@test.com',
      username: 'juan_pos',
      password: '123456',
      password2: '123456'
    })
  };

  campoNoValido( campo:string ){
    return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched
  }

  // emailRequired(){
  //   return this.miFormulario.get('email')?.touched 
  //   && this.miFormulario.get('email')?.errors?.['required'];
  // }

  // emailFormato(){
  //   return this.miFormulario.get('email')?.touched 
  //   && this.miFormulario.get('email')?.errors?.['pattern'];
  // }

  // emailTomado(){
  //   return this.miFormulario.get('email')?.touched 
  //   && this.miFormulario.get('email')?.errors?.['emailTomado'];
  // }

  submitFormulario(){

    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
