import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroesResponse } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient) { }

  getHeroes(): Observable<HeroesResponse[]>{
    return this.http.get<HeroesResponse[]>('http://localhost:3000/heroes');
  }

  getHeroeById( id: string ): Observable<HeroesResponse> {
    return this.http.get<HeroesResponse>(`http://localhost:3000/heroes/${ id }`);
  }

  getSugerencias ( termino: string ): Observable<HeroesResponse[]>{
    return this.http.get<HeroesResponse[]>(`http://localhost:3000/heroes?=${ termino }&_limit=6`);
  }

  addHeroe ( item: HeroesResponse ): Observable<HeroesResponse> {
    return this.http.post<HeroesResponse>(`http://localhost:3000/heroes`, item);
  }

  updateHeroe ( item: HeroesResponse ): Observable<HeroesResponse> {
    return this.http.put<HeroesResponse>(`http://localhost:3000/heroes/${ item.id }`, item);
  }

  deleteHeroe ( id: string ): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/heroes/${ id }`);
  }

}


