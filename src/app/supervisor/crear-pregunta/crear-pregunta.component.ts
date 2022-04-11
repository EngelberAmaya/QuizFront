import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioSupervisorService } from 'src/app/services/usuario-supervisor.service';
import Swal from 'sweetalert2';

interface Respuesta {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-crear-pregunta',
  templateUrl: './crear-pregunta.component.html',
  styleUrls: ['./crear-pregunta.component.css']
})
export class CrearPreguntaComponent implements OnInit {

  formulario: FormGroup;
  msg: any = [];
  avail: boolean;
  quizid:any;
  obj:any;
  options:any[]= [];

  respuestas: Respuesta[] = [
    { value: 1, viewValue: 'Opción 1' },
    { value: 2, viewValue: 'Opción 2' },
    { value: 3, viewValue: 'Opción 3' },
    { value: 4, viewValue: 'Opción 4' },
  ];

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioSupervisorService,
              private router: Router) { 
    this.formulario = this.formBuilder.group({
      questionText: [null, [ Validators.required ]],
      option1: [null, Validators.required],
      option2: [null, [ Validators.required ]],
      option3: [null, Validators.required],
      option4: [null, [ Validators.required ]],
      answer: [null, Validators.required]
    });
  }

  ngOnInit(): void {

    if(this.usuarioService.getQuizId() == undefined){

      this.router.navigate(['/supervisor/uploadquiz']);
    }
    else {
      this.quizid = this.usuarioService.getQuizId();

    }
  }

  crearPregunta() {

    this.options.push({optionValue: '1', optionText: this.formulario.value.option1 });
    this.options.push({optionValue: '2', optionText: this.formulario.value.option2 });
    this.options.push({optionValue: '3', optionText: this.formulario.value.option3 });
    this.options.push({optionValue: '4', optionText: this.formulario.value.option4 });
    // console.log(this.options);
    this.obj = {
      quizid: this.quizid,
      options: this.options,
      questionText: this.formulario.value.questionText,
      answer: this.formulario.value?.answer
    }
    // console.log(this.obj);
    this.usuarioService.guardarPregunta(this.obj).subscribe((data: any) => {
          console.log(data);

          Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Registro Exitoso',
            showConfirmButton: false,
            timer: 1500
          });
          
          this.router.navigate(['/supervisor/uploadquiz']);

    }, (error: any) => {

          console.log(error);
    
          Swal.fire({
            icon: 'error',
            title: 'Hubo un error',
            text: `${error}`
          });
        }
      )
  }

  get questionText() { return this.formulario.get('questionText'); };
  get option1() { return this.formulario.get('option1'); };
  get option2() { return this.formulario.get('option2'); };
  get option3() { return this.formulario.get('option3'); };
  get option4() { return this.formulario.get('option4'); };
  get answer() { return this.formulario.get('answer'); };

}
