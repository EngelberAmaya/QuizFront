import { Component, OnInit } from '@angular/core';
import { UsuarioSupervisorService } from 'src/app/services/usuario-supervisor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-usuario-invitado',
  templateUrl: './ver-usuario-invitado.component.html',
  styleUrls: ['./ver-usuario-invitado.component.css']
})
export class VerUsuarioInvitadoComponent implements OnInit {

  msg: any = [];
  public users: any[];
  avail: boolean;
  empty: boolean;
  public loading: any = true;

  constructor(private usuarioService: UsuarioSupervisorService) { }

  ngOnInit(): void {
    this.verUsuarios();
  }

  verUsuarios(){
    this.loading = true;
    this.usuarioService.verUsuariosInvitados().subscribe((resp: any) => {
      this.users = resp.usuarios;
      console.log(resp);
      this.loading = false;

      if (!this.users.length) {
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

}
