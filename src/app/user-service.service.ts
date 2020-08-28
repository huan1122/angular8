import { Injectable } from '@angular/core';
import {MessagesService} from './messages.service';
import { Observable,of, from} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {User} from '../models/User'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http : HttpClient
  ) { }
  private url : string  = "";
  getListUser(): Observable<User[]>{
    this.url = "http://localhost:8080/api/getListUser";
    return this.http.get<User[]>(this.url).pipe(catchError(error => of([])));
  }
  getUserDetail(id :number): Observable<User>{
    this.url ="http://localhost:8080/api/getDetailUser";
    const urlDetail = `${this.url}/${id}`;
    return this.http.get<User>(urlDetail).pipe(catchError(error =>of(new User()))
    );
  }
  updateUser(user:User): Observable<User>{
    this.url = "http://localhost:8080/api/updateUser";
    const urlUpdate = `${this.url}/${user.userId}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type:':'application/json'})
    };
  return this.http.put<User>(urlUpdate,user).pipe(
    tap(update => console.log(`${JSON.stringify(update)} : succes`)),catchError(error => of(new User()))
  );
  }
  saveUser(user:User):Observable<any>{
    this.url = "http://localhost:8080/api/saveUser";
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type:':'application/json'})
    };
    return this.http.post(this.url,user).pipe(tap(save => console.log(`${JSON.stringify(save)}`)),catchError(error => of(new User)));
  }
}
