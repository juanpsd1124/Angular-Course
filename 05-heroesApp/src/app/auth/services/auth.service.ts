import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResp } from '../interfaces/auth.interface';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: AuthResp | undefined;

  get auth(): AuthResp {
    return { ...this._auth! };
  }

  constructor( private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean>  {

    if ( !localStorage.getItem('token') ){

      return of(false);
    }
    return this.http.get <AuthResp>(`http://localhost:3000/usuarios/1`)
      .pipe(
        map( auth => {
          this._auth = auth;
          return true;
        } )
      );
  }

  login(): Observable<AuthResp> {
    return this.http.get <AuthResp>(`http://localhost:3000/usuarios/1`)
            .pipe(
              tap( auth => this._auth = auth ),
              tap( auth => localStorage.setItem('token', auth.id.toString() ))
                  // console.log('AUTHSERVICE', auth)
            );
  }
}
