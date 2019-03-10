import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class Book {
  id: number;
  author: string;
  title: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {
  }

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private booksUrl = 'https://api.optize.pl/books';

  create(book: Book): Promise<Book> {
    return this.http
      .post(this.booksUrl, book, this.options)
      .toPromise()
      .then((res: Response) => res)
      .catch(BookService.handleError);
  }

  list(): Promise<Book[]> {
    return this.http
      .get(this.booksUrl, this.options)
      .toPromise()
      .then((res: Response) => res)
      .catch(BookService.handleError);
  }

  destroy(id: number): Promise<void> {
    const url = this.booksUrl + '/' + id;

    return this.http
      .delete(url, this.options)
      .toPromise()
      .then(() => null)
      .catch(BookService.handleError);
  }

  get(id: number): Promise<Book> {
    const url = this.booksUrl + '/' + id;

    return this.http
      .get(url, this.options)
      .toPromise()
      .then((res: Response) => res)
      .catch(BookService.handleError);
  }

  update(book: Book): Promise<void> {
    const url = this.booksUrl + '/' + book.id;

    return this.http
      .put(url, book, this.options)
      .toPromise()
      .then(() => null)
      .catch(BookService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.log(error);

    return;
  }
}

