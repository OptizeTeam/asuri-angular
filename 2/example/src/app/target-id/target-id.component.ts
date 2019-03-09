import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-target-id',
  templateUrl: './target-id.component.html',
  styleUrls: ['./target-id.component.css']
})
export class TargetIdComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
  }

  receivedParams;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.receivedParams = params;
    });
  }
}
