import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `<h1>Błąd 404, nie znaleziono kebaba.</h1>`,
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
