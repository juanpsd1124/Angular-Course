import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifServiceService {

  private apiKey : string = '51F8FPwU01t9xPTGZ6MUGgemqDjgYhSK';
  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor ( private http: HttpClient ){}

  buscarGifs( query: string ){

    query = query.trim().toLocaleLowerCase();
   
    if( !this.historial.includes(query) ){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
    }

    this.http.get( 'api.giphy.com/v1/gifs/search' )
      .subscribe( (resp: any) => {
        console.log(resp);
      });
    // console.log( this._historial );


  }


}
