import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-with-data',
  templateUrl: './with-data.component.html',
  styleUrls: ['./with-data.component.css']
})
export class WithDataComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
  }

  receivedData;

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.receivedData = data;
    });
  }
}
