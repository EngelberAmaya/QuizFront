import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioSupervisorService } from 'src/app/services/usuario-supervisor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-pregunta',
  templateUrl: './ver-pregunta.component.html',
  styleUrls: ['./ver-pregunta.component.css']
})
export class VerPreguntaComponent implements OnInit {

  quizid: any;
  allQuestions: any;

  load: any
  del: any;
  empty: any = true;

  constructor(private usuarioService: UsuarioSupervisorService, private router: Router) { }

  ngOnInit(): void {

    this.load = true;
    this.empty = true;
    
    if (this.usuarioService.getQuizId() == undefined) {
      this.router.navigate(['/supervisor/supervisorhome']);
    }
    else {
      if (this.usuarioService.getDelete() == undefined) {
        this.router.navigate(['/supervisor/supervisorhome']);
      }
      else {
        this.del = this.usuarioService.getDelete()
        this.quizid = this.usuarioService.getQuizId();
        // console.log(this.del);
        this.obtenerPreguntas(this.quizid);
      }

    }
  }

  obtenerPreguntas(quizid: any) {
    // console.log("hahaha");
    // console.log(quizid);

    this.usuarioService.obtenerPreguntasPorCuestionario(quizid)
      .subscribe(
        (data: any) => {
            console.log(data);
            this.allQuestions = data.pregunta;
            this.load = false

            if (!this.allQuestions.length) {
              this.empty = true;
            }
            else {
              this.empty = false;
            }
          
        }, (error: any) => {
          //this.loading = false;
          //this.handleError(error);
          console.log(error);
    
          Swal.fire({
            icon: 'error',
            title: 'Hubo un error',
            text: `${error}`
          });
        }


      )
  }

}
