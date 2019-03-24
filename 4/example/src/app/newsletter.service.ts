import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class Newsletter {
  id: number;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  constructor(private http: HttpClient) {
  }

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private newsletterUrl = 'https://api.blog.optize.pl/newsletter';

  private static handleError(error: any): Promise<any> {
    console.log(error);

    return;
  }

  create(newsletter: Newsletter): Promise<Newsletter> {
    return this.http
      .post(this.newsletterUrl, newsletter, this.options)
      .toPromise()
      .then((res: Response) => res)
      .catch(NewsletterService.handleError);
  }
}
