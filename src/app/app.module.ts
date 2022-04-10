import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    LoadingComponent,
    InvitadoComponent,
    LoginInvitadoComponent,
    LoginAdministradorComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
