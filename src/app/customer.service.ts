import { Injectable } from '@angular/core';
import {Customers} from '../models/customer';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private http:HttpClient,
    ) { }
  private url:string = "";
  getListCustomer():  Observable<Customers[]>{
    this.url = "http://localhost:8080/api/getListCustomer";

    return this.http.get<Customers[]>(this.url).pipe(
      catchError(eror=>of([]))
      );
  }
  getDetialCustomer(id:number):Observable<Customers>{
    this.url = "http://localhost:8080/api/getDetailCustomer";
    return this.http.get<Customers>(`${this.url}/${id}`)
    .pipe(
      catchError(
        error => of(new Customers()))
    );
  }
  saveCustomer(customer:Customers):Observable<any>{
    this.url = "http://localhost:8080/api/addCustomer";
    return this.http.post(this.url,customer).pipe(tap(save => console.log(`${JSON.stringify(save)}`)),catchError(error => of(new Customers)));
  }
  updateCustomer(customer: Customers): Observable<any>{
    this.url = "http://localhost:8080/api/updateCustomer";
    return this.http.put(this.url,customer).pipe(tap(c => console.log(`${JSON.stringify(c)}`),catchError(err => of(new Customers))));
  }
}
