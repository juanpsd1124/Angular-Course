import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor );
      // console.log( 'debouncer:', valor );
    });
  };

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada( event: any){
    this.debouncer.next( this.termino );
  }

}