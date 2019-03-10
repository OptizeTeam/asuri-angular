import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BookService } from '../book.service';

class Book {
  id: number;
  author: string;
  title: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  booksUrl = 'https://api.optize.pl/books';

  books: Promise<Book[]>;

  ngOnInit() {
    this.books = this.getBooks();
  }

  getBooks(): Promise<Book[]> {
    return this.http
      .get(this.booksUrl)
      .toPromise()
      .then((res: Response) => {
        return res;
      })
      .catch(error => {
        console.log(error);

        return null;
      });
  }

  addBook() {
    let newBook = {
        author: 'Jan Kowalski',
        title: 'Moja wspaniała autobiografia',
        quantity: 666,
        price: 123.45
      },
      options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

    this.http
      .post(this.booksUrl, newBook, options)
      .toPromise()
      .then(response => {
        this.books = this.getBooks();
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteBook(id: number) {
    console.log('Delete clicked!');
    console.log(id);
  }
}
