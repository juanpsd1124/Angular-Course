import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
  })

export class ContadorComponent{

    title:string = 'Contador App';
    base:number = 5;
    count:number = 0;

    // Base: number = 5

    increment = ():void => {
        this.count = this.count + this.base; 
    }

    decrement = ():void => {
        this.count = this.count - this.base; 
    }
}

