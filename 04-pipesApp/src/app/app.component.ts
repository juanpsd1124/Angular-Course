import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeNGModule } from './prime-ng/prime-ng.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  

  constructor( private primengConfig: PrimeNGConfig){}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  title = 'pipesApp';
  nombre: string = "JUAn PosaDA"
  
  mostrarNombre(){
    console.log(this.nombre);
  }
}
