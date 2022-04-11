import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Quiz } from '../interfaces/quiz';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsuarioSupervisorService {

  token = localStorage.getItem('token');
  private quizid: any;
  private delete:any;

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  verUsuariosInvitados() {
    return this.http.get(`${apiUrl}/admin/invitado?token=${this.token}`, { headers: this.headers });
  }

  verQuizzes() {
    return this.http.get(`${apiUrl}/supervisor/quiz?token=${this.token}`, { headers: this.headers });
  }

  guardarQuiz(quiz: Quiz){
    return this.http.post(`${apiUrl}/supervisor/quiz?token=${this.token}`, quiz, { headers: this.headers});
  }

  borrarQuiz(id: string) {
    return this.http.delete(`${apiUrl}/supervisor/quiz/${id}?token=${this.token}`, { headers: this.headers });
  }

  guardarPregunta(body: any) {
    return this.http.post(`${apiUrl}/supervisor/pregunta?token=${this.token}`, body, { headers: this.headers });
  }

  uploadquiz(body: any) {
    return this.http.post(`${apiUrl}/supervisor/pregunta/uploadquiz?token=${this.token}`, { id: body }, {  headers: this.headers});
  }

  obtenerPreguntasPorCuestionario(id: string) {
    return this.http.get(`${apiUrl}/supervisor/pregunta/${id}?token=${this.token}`, { headers: this.headers });
  }

  setQuizId(id: any) {
    this.quizid = id;
  }

  getQuizId() {
    return this.quizid;
  }

  setDelete(data: any) {
    this.delete = data;
  }

  getDelete() {
    return this.delete;
  }
}

