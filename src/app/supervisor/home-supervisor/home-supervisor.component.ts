import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioSupervisorService } from 'src/app/services/usuario-supervisor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-supervisor',
  templateUrl: './home-supervisor.component.html',
  styleUrls: ['./home-supervisor.component.css']
})
export class HomeSupervisorComponent implements OnInit {

  msg: any = [];
  empty: boolean;
  avail: boolean;
  public quiz: any[];
  public loading: any = true;

  constructor(private router: Router, private usuarioService: UsuarioSupervisorService) { }

  ngOnInit(): void {
    this.loading = true
    this.empty = false;
    this.verQuizzes();
  }

  verQuizzes(){
    this.loading = true;
    this.usuarioService.verQuizzes().subscribe((resp: any) => {
      this.quiz = resp.quiz;
      console.log(resp);
      this.loading = false;

      if (!this.quiz.length) {
        this.empty = true;
      }
      else {
        this.empty = false;
      }

    }, (error: any) => {
      this.loading = false;
      //this.handleError(error);
      console.log(error);

      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: `${error}`
      });
    });
   
  }

  viewQuestion(q: any) {
    this.usuarioService.setQuizId(q._id);
    this.usuarioService.setDelete(q.upload)
    this.router.navigate(['/supervisor/verpregunta']);
  }

  delete(quiz: any) {

    this.loading = true;

    this.usuarioService.borrarQuiz(quiz._id)
      .subscribe(
        (data: any) => {
          this.loading = false;

          Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Proceso Exitoso',
            showConfirmButton: false,
            timer: 1500
          });

          // console.log(data);
          this.verQuizzes();
         
        }, (error: any) => {
          this.loading = false;
          //this.handleError(error);
          console.log(error);
    
          Swal.fire({
            icon: 'error',
            title: 'Hubo un error',
            text: `${error}`
          });
        })
  }

}
