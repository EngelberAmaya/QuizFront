import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-invitado',
  templateUrl: './navbar-invitado.component.html',
  styleUrls: ['./navbar-invitado.component.css']
})
export class NavbarInvitadoComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  logoutuser() {

    Swal.fire({
      //position: 'top-end',
      icon: 'success',
      title: 'Proceso Exitoso',
      showConfirmButton: false,
      timer: 1500
    });

    this.authService.logoutUser();
    this.router.navigate(['/']);   
    
  }

}
