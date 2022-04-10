import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket: any;
  apiUrl = environment.apiUrl;

  constructor() { 
    this.socket = io(this.apiUrl);
  }

  listen(eventName:string)
  {
    return new Observable((subscriber)=>{
        this.socket.on(eventName, (data: any)=>{
          subscriber.next(data);
        })
    });
  }

  emit(eventName:string,data:any)
  {
    this.socket.emit(eventName,data);
  }

}
