import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  mesages: string[]= [];
  add(mesage :string){
    this.mesages.push(mesage);
  }
  deleteAll(){
    this.mesages = [];
  }
  constructor() { }
}
