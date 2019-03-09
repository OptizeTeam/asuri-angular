import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angularsample';

  hideMe: boolean = false;

  nameOfButton: string = 'Jam jest przycisk!';

  /**
   * @returns void
   */
  runMyMethod() {
    alert('Lol, działa');
  }

  foo: number = 3;

  people: string[] = [
    'Jan',
    'Piotr',
    'Maria'
  ];

  companyName: string = 'Optize sp. z o.o.';
}
