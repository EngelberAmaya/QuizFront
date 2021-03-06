import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthData } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-administrador',
  templateUrl: './login-administrador.component.html',
  styleUrls: ['./login-administrador.component.css']
})
export class LoginAdministradorComponent implements OnInit {

  msg: any = [];
  avail: boolean;
  formularioUno: FormGroup;
  formularioDos: FormGroup;
  spiner = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
              private router: Router) {

    this.formularioUno = this.formBuilder.group({
      email: [null, [ Validators.required , Validators.email ]],
      password: [null, Validators.required]
    });

    this.formularioDos = this.formBuilder.group({
      email2: [null, [ Validators.required , Validators.email ]],
      phone: [null, Validators.required],
      password2: [null, Validators.required],
      password3: [null, Validators.required]
    });

  }

  ngOnInit(): void {

    $(document).ready(function () {

      $("#sign-in-btn").click(function () {

        $(".containerr").removeClass("sign-up-mode");

      });

      $("#sign-up-btn").click(function () {
        $(".containerr").addClass("sign-up-mode");

      });

    });
  }

  signinup() {
    // console.log("hello1");
    this.msg = "";
    this.avail = false;
  }

  guardarUsuario(){

    const usuario: any = {
      email: this.formularioDos.value.email2,
      contact: this.formularioDos.value.phone,
      password: this.formularioDos.value.password2      
    }

    this.spiner = true;

    this.authService.guardarUsuarioSupervisor(usuario).subscribe((resp: any) => {
      console.log(resp);

      this.spiner = false;

      Swal.fire({
        //position: 'top-end',
        icon: 'success',
        title: 'Registro Exitoso',
        showConfirmButton: false,
        timer: 1500
      });

      //this.formularioDos.reset();

      //this.formularioDos.reset();

      window.location.reload();
      this.router.navigate(['/supervisor']);

    }, (error: any) => {
      this.spiner = false;
      //this.handleError(error);
      console.log(error);

      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'El correo ya esta registrado, por favor intente con otro!'
      });
    })
    
  }

  entrar(){

    if (!this.formularioUno.valid) {
      this.msg = "Correo electr??nico o contrase??a no v??lidos";
      this.avail = true;
      return;
    }

    const { email, password } = this.formularioUno.value;

    const login: AuthData = {
      email,
      password
    };

    this.spiner = true;

    this.authService.login(login).subscribe((data:any) => {
      
      if (data['msg']) {
        this.spiner = false;
        this.msg = data['msg'];
        this.avail = true;
        return;
      }

      if (data.role == "admin") {
        this.spiner = false;
        localStorage.setItem('token', data.token);
        localStorage.setItem('admin', 'yes');
        localStorage.setItem('invitado', 'no');
        localStorage.setItem('supervisor', 'no');
        this.router.navigate(['/admin/adminhome']);

        Swal.fire({
          //position: 'top-end',
          icon: 'success',
          title: 'Proceso Exitoso',
          showConfirmButton: false,
          timer: 1500
        });
        
      } else if(data.role == "invitado") {

        if (data.blocked == true) {
          this.spiner = false;
          this.msg = "??Est?? bloqueado por el administrador, espere hasta que el administrador lo desbloquee!";
          this.avail = true;
          return;
          
        } else {
          this.spiner = false;
          localStorage.setItem('token', data.token);
          localStorage.setItem('userid', this.formularioUno.value.email);
          localStorage.setItem('admin', 'no');
          localStorage.setItem('invitado', 'yes');
          localStorage.setItem('supervisor', 'no');
          this.router.navigate(['/invitado/invitadohome']);

          Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Proceso Exitoso',
            showConfirmButton: false,
            timer: 1500
          });
        }
        
      } else {

        if (data.blocked == true) {
          this.spiner = false;
          this.msg = "??Est?? bloqueado por el administrador, espere hasta que el administrador lo desbloquee!";
          this.avail = true;
          return;
          
        } else {
          this.spiner = false;
          localStorage.setItem('token', data.token);
          localStorage.setItem('userid', this.formularioUno.value.email);
          localStorage.setItem('admin', 'no');
          localStorage.setItem('invitado', 'no');
          localStorage.setItem('supervisor', 'yes');
          this.router.navigate(['/supervisor/supervisorhome']);

          Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Proceso Exitoso',
            showConfirmButton: false,
            timer: 1500
          });
        }

      }

    }, (error: any) => {
      this.spiner = false;
      //this.handleError(error);
      console.log(error);

      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Credenciales incorrectas'
      });
    });

  }

  camposNoIguales (): boolean {
    return ((this.password2?.value !== this.password3?.value)) ? true : false;
  }

  get email() { return this.formularioUno.get('email'); };
  get password() { return this.formularioUno.get('password'); };

  get email2() { return this.formularioDos.get('email2'); };
  get phone() { return this.formularioDos.get('phone'); };
  get password2() { return this.formularioDos.get('password2'); };
  get password3() { return this.formularioDos.get('password3'); };

}
