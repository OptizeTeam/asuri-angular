import {Component, OnInit} from '@angular/core';
import {Newsletter, NewsletterService} from '../newsletter.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.sass']
})
export class NewsletterComponent implements OnInit {
  constructor(private newsletterService: NewsletterService) {
  }

  formData;

  ngOnInit() {
    this.formData = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ]))
    });
  }

  onClickSubmit(data) {
    const newsletterData = {
      email: data.email
    };

    this.newsletterService.create(newsletterData as Newsletter).then(newsletter => {
      console.log(newsletter);

      this.formData.reset();

      alert('Pomyślnie zapisano do newslettera.');
    });
  }
}
