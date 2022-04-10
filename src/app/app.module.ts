import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Angular material
import { MatFormFieldModule}  from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule }  from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HeaderComponent } from './home/header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { InvitadoComponent } from './admin/invitado/invitado.component';
import { LoginInvitadoComponent } from './auth/login-invitado/login-invitado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginAdministradorComponent } from './auth/login-administrador/login-administrador.component';
import { NavbarInvitadoComponent } from './invitado/navbar-invitado/navbar-invitado.component';
import { HomeInvitadoComponent } from './invitado/home-invitado/home-invitado.component';
import { PlayQuizComponent } from './invitado/play-quiz/play-quiz.component';
import { NavbarSupervisorComponent } from './supervisor/navbar-supervisor/navbar-supervisor.component';
import { HomeSupervisorComponent } from './supervisor/home-supervisor/home-supervisor.component';
import { InvitadoGuard } from './invitado/invitado.guard';
import { SupervisorGuard } from './supervisor/supervisor.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    LoadingComponent,
    InvitadoComponent,
    LoginInvitadoComponent,
    LoginAdministradorComponent,
    NavbarInvitadoComponent,
    HomeInvitadoComponent,
    PlayQuizComponent,
    NavbarSupervisorComponent,
    HomeSupervisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [InvitadoGuard, SupervisorGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
