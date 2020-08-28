import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {MessagesService} from './messages.service';
import { Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  private url : string = "";
  getListProduct():Observable<Product[]>{
    this.url = "http://localhost:8080/api/getListProduct";
    const headers = new HttpHeaders()
            .set("Access-Control-Allow-Origin", "*");
    return this.http.get<Product[]>(this.url,{headers})
      .pipe(
        catchError(error => of([]))
      );
  }
  getProductDetail(id :number): Observable<Product>{
    this.url ="http://localhost:8080/api/getDetailProduct";
    const urlDetail = `${this.url}/${id}`;
    return this.http.get<Product>(urlDetail).pipe(catchError(error =>of(new Product()))
    );
  }
  updateProduct(product:Product): Observable<Product>{
    this.url = "http://localhost:8080/api/updateProduct";
    const urlUpdate = `${this.url}/${product.productId}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type:':'application/json'})
    };
  return this.http.put<Product>(urlUpdate,product).pipe(
    tap(update => console.log(`${JSON.stringify(update)} : succes`)),catchError(error => of(new Product()))
  );
  }
  saveProduct(product:Product):Observable<any>{
    this.url = "http://localhost:8080/api/saveProduct";
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type:':'application/json'})
    };
    return this.http.post(this.url,product).pipe(tap(save => console.log(`${JSON.stringify(save)}`)),catchError(error => of(new Product)));
  }
  constructor(
    private http : HttpClient,
    private messagesService: MessagesService){}
}
