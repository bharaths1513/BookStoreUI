import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { CartResponse } from '../model/cart-response';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseurl="http://localhost:8080/CartService";
  constructor(private http:HttpClient) { }
  
  getCart(){
    return this.http.get<any>(`${this.baseurl}/FindAllBooks`,{headers: new HttpHeaders({token: localStorage['token']})})
  }
}
