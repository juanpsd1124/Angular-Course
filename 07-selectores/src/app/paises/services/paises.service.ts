import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisSmall } from '../interfaces/paises.interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _regiones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private baseUrl: string = environment.baseUrl

  get regiones(): string[]{
    return [ ...this._regiones ];
  }

  constructor( private http: HttpClient) { }

  getPaisesPorRegion( region: string ): Observable<PaisSmall[]>{

    const url: string = `${ this.baseUrl }/region/${ region }?=fields=alpha3Code;name`

    return this.http.get<PaisSmall[]>( url );
  }


}
