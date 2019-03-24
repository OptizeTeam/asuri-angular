import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class Post {
  id: number;
  title: string;
  slug: string;
  teaser: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {
  }

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private postUrl = 'https://api.blog.optize.pl/post';

  private static handleError(error: any): Promise<any> {
    console.log(error);

    return;
  }

  latest(): Promise<Post[]> {
    const url = this.postUrl + '/latest';

    return this.http
      .get(url, this.options)
      .toPromise()
      .then((res: Response) => res)
      .catch(PostService.handleError);
  }

  get(id: number): Promise<Post> {
    const url = this.postUrl + '/' + id;

    return this.http
      .get(url, this.options)
      .toPromise()
      .then((res: Response) => res)
      .catch(PostService.handleError);
  }
}

