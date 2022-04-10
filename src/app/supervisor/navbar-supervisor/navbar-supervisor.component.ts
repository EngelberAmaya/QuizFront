import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-supervisor',
  templateUrl: './navbar-supervisor.component.html',
  styleUrls: ['./navbar-supervisor.component.css']
})
export class NavbarSupervisorComponent implements OnInit {

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
