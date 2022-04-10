import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitadoComponent } from './admin/invitado/invitado.component';
import { LoginAdministradorComponent } from './auth/login-administrador/login-administrador.component';
import { LoginInvitadoComponent } from './auth/login-invitado/login-invitado.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // root
  { path: '', component: HomeComponent },
  { path: 'invitado', component: LoginInvitadoComponent },
  { path: 'supervisor', component: LoginAdministradorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
