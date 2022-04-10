import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/usuario';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  guardarUsuarioInvitado(usuario: Usuario){

    return this.http.post(`${apiUrl}/invitado`, usuario, {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });

  }

  guardarUsuarioSupervisor(usuario: Usuario){

    return this.http.post(`${apiUrl}/supervisor`, usuario, {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });

  }
}
