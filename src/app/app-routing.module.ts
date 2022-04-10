import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitadoComponent } from './admin/invitado/invitado.component';
import { LoginAdministradorComponent } from './auth/login-administrador/login-administrador.component';
import { LoginInvitadoComponent } from './auth/login-invitado/login-invitado.component';
import { HomeComponent } from './home/home.component';
import { HomeInvitadoComponent } from './invitado/home-invitado/home-invitado.component';
import { InvitadoGuard } from './invitado/invitado.guard';
import { PlayQuizComponent } from './invitado/play-quiz/play-quiz.component';
import { HomeSupervisorComponent } from './supervisor/home-supervisor/home-supervisor.component';
import { SupervisorGuard } from './supervisor/supervisor.guard';
import { VerUsuarioInvitadoComponent } from './supervisor/ver-usuario-invitado/ver-usuario-invitado.component';


const routes: Routes = [
  // root
  { path: '', component: HomeComponent },

  // Invitado
  { path: 'invitado', component: LoginInvitadoComponent },  
  { path: 'invitado/invitadohome', component: HomeInvitadoComponent, canActivate: [InvitadoGuard] },
  { path: 'invitado/playquiz', component: PlayQuizComponent, canActivate: [InvitadoGuard]},

   // Supervisor
  { path: 'supervisor', component: LoginAdministradorComponent },
  { path: 'supervisor/supervisorhome', component: HomeSupervisorComponent, canActivate: [SupervisorGuard] },
  { path: 'supervisor/verinvitado', component: VerUsuarioInvitadoComponent, canActivate: [SupervisorGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
