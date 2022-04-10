import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InvitadoGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  doSomthing() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    localStorage.removeItem('admin');
    localStorage.removeItem('invitado');
    localStorage.removeItem('supervisor');
    this.router.navigate(['/'])
  }
  
  canActivate(): boolean {
    
    if (this.authService.loggedIn())
    {
      if (localStorage.getItem('invitado') == "yes")
      {
        if (localStorage.getItem('admin') == "no")
        {
          if (localStorage.getItem('supervisor') == "no")
          {
            return true;
          }
          else
          {
            this.doSomthing();
            return false;
          }
        }
        else {
          this.doSomthing();
          return false;
        }

      }
      else {
        this.doSomthing();
        return false;
      }
    }
    else {
      this.doSomthing();
      return false;
    }
  }
  
}
