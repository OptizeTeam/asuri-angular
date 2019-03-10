import { Component, OnInit } from '@angular/core';
import {Book, BookService} from '../book.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  constructor(private bookService: BookService) { }

  books: Promise<Book[]>;
  bookToDelete: number;

  ngOnInit() {
    this.listBooks();
  }

  listBooks() {
    this.books = this.bookService.list();
  }

  addBook() {
    let newBook = {
      author: 'Jan Kowalski',
      title: 'Moja wspaniała autobiografia',
      quantity: 666,
      price: 123.45
    };

    this.bookService.create(newBook as Book).then((book) => {
      console.log(book);

      this.listBooks();
    });
  }

  deleteBook() {
    this.bookService.destroy(this.bookToDelete).then(() => {
      this.listBooks();
    });
  }
}
