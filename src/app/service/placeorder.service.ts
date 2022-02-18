import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookDetails } from '../model/book-details';
import { Placeorder } from '../model/placeorder';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {

  baseurl:string = "http://localhost:8080/Order";
  constructor(private http:HttpClient) { }


  placeorder(BookId:number,orderdata: Placeorder){
      // orderdata: Placeorder = new Placeorder;

    return this.http.post<any>(`${this.baseurl}/PlaceOrder/`+BookId,orderdata,{headers: new HttpHeaders({token: localStorage['token']})})

  }
}
