import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDetails } from 'src/app/model/book-details';
import { BookstoreService } from 'src/app/service/bookstore.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  bookList:BookDetails[]=[];
  totalBooks:number | undefined;
  constructor(private bookService: BookstoreService, private router : Router) { }

  ngOnInit(): void {
    this.getBookDetail();
  }

  getBookDetail() {
    this.bookService.getAllBooks().subscribe( bookdata => {
      console.log(bookdata);
      this.bookList=bookdata;
      console.log(this.bookList);
      this.totalBooks= bookdata.length;
    });
  }

}
