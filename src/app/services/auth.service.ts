import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { AuthData } from '../interfaces/auth';
import { Usuario } from '../interfaces/usuario';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient, private router: Router) { }

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

  login(login: AuthData){

    return this.http.post(`${apiUrl}/login`, login, {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });

  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }


  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    localStorage.removeItem('admin');
    localStorage.removeItem('invitado');
    localStorage.removeItem('supervisor');
    this.router.navigate(['/'])
  }
}
