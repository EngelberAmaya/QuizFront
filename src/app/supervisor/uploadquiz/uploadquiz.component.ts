import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioSupervisorService } from 'src/app/services/usuario-supervisor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-uploadquiz',
  templateUrl: './uploadquiz.component.html',
  styleUrls: ['./uploadquiz.component.css']
})
export class UploadquizComponent implements OnInit {

  msg: any = [];
  avail: boolean;
  public quiz: any[];
  empty: boolean;
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


  add(quiz: any) {
    this.usuarioService.setQuizId(quiz._id);
    this.router.navigate(['/supervisor/crearpregunta']);
  }

  upload(quiz: any) {
    // console.log("upload");
    // console.log(quiz);
    // console.log(quiz._id);
    this.usuarioService.uploadquiz(quiz._id)
      .subscribe(
        (data: any) => {

          console.log(data);
          this.router.navigate(['/supervisor/supervisorhome']);

          this.quiz = data.
          console.log(data);
          if (data['msg']) {
            this.msg = data['msg'];
            this.avail = true;
            return;
          }
          if (data['message']) {
            this.router.navigate(['/teacher/teacherhome']);
          }
          else {
            this.msg = "something went wrong!!";
            this.avail = true;
            return;
          }
        },
        error => {
          //this.router.navigate(['/error']);
          console.log(error)
        }


      )
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
          this.router.navigate(['/supervisor/supervisorhome']);
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
