import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  LoginUsers(): Observable<any[]> {
    return this._http.get('app-login') as Observable<any[]>
  }
  enviarFormulario(data: any) {
    return this._http.post('http://0.0.0.0:8100/registrar-usuario', data);
    }
}
