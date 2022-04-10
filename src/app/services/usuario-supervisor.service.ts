import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsuarioSupervisorService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  verUsuariosInvitados() {
    return this.http.get(`${apiUrl}/admin/invitado?token=${localStorage.getItem('token')}`, { headers: this.headers });
  }

}
