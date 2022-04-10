import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.component.html',
  styleUrls: ['./invitado.component.css']
})
export class InvitadoComponent implements OnInit {

  public loading: any = true;
  public empty: any = true;

  constructor() { }

  ngOnInit(): void {
    this.loading = true;
    this.empty = true;
  }

}
