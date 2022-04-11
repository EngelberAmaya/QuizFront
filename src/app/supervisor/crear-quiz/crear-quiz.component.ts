import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioSupervisorService } from 'src/app/services/usuario-supervisor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-quiz',
  templateUrl: './crear-quiz.component.html',
  styleUrls: ['./crear-quiz.component.css']
})
export class CrearQuizComponent implements OnInit {

  msg: any = [];
  avail: boolean;
  formulario: FormGroup;
  spiner = false;

  constructor(private usuarioService: UsuarioSupervisorService, private router: Router,
              private formBuilder: FormBuilder) { 

      this.formulario = this.formBuilder.group({
        quizname: [null, [ Validators.required ]],
        quizdescription: [null, Validators.required]
      });
  }

  ngOnInit(): void {
  }

  crearQuiz(){

    const quiz: any = {
      quizname: this.formulario.value.quizname,
      quizdescription: this.formulario.value.quizdescription     
    }

    this.spiner = true;

    this.usuarioService.guardarQuiz(quiz).subscribe((resp: any) => {

      console.log(resp);
      this.spiner = false;

      Swal.fire({
        //position: 'top-end',
        icon: 'success',
        title: 'Registro Exitoso',
        showConfirmButton: false,
        timer: 1500
      });

      this.router.navigate(['/supervisor/uploadquiz']);

    }, (error: any) => {
      this.spiner = false;
      //this.handleError(error);
      console.log(error);

      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'El correo ya esta registrado, por favor intente con otro!'
      });
    });

  }

  get quizname() { return this.formulario.get('quizname'); };
  get quizdescription() { return this.formulario.get('quizdescription'); };

}
