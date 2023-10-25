import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _baseURL = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private _http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this._http.get('https://jsonplaceholder.typicode.com/posts') as Observable<any[]>
  }
  showUser(id: number) : Observable<any> {
    return this._http.get(`https://jsonplaceholder.typicode.com/users/${id}`) as Observable<any>
  }

  getAvatar(id: number) : Observable<any> {
    return this._http.get(`https://jsonplaceholder.typicode.com/posts/${id}`) as Observable<any>

  }
  LoginUsers(): Observable<any[]> {
    return this._http.get('app-login') as Observable<any[]>
  }
  enviarFormulario(data: any) {
    return this._http.post('http://0.0.0.0:8100/registrar-usuario', data);
    }
}
