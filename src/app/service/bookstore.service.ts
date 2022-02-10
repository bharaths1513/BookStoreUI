import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookDetails } from '../model/book-details';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  BaseUrl="http://localhost:8080/BookStore";
  constructor(private http:HttpClient) { }

  getAllBooks(){
    return this.http.get<[BookDetails]>(`${this.BaseUrl}/GetAllBooks`,{headers: new HttpHeaders({token: localStorage['token']})});
  }

}
