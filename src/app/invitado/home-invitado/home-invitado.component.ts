import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-invitado',
  templateUrl: './home-invitado.component.html',
  styleUrls: ['./home-invitado.component.css']
})
export class HomeInvitadoComponent implements OnInit {

  allquiz: any;
  public loading: any = true;
  public empty: any = true;

  constructor() { }

  ngOnInit(): void {
  }

}
