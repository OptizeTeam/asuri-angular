import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() {
  }

  year = new Date().getFullYear();
  companyName = 'Lorem Ipsum sp. z o.o. sp. k.';

  ngOnInit() {
  }
}
