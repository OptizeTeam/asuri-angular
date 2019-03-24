import {Component, OnInit} from '@angular/core';
import {Post, PostService} from '../post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  receivedParams;
  post: Post;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.receivedParams = params;

      this.getPost(params.slug);
    });
  }

  getPost(slug) {
    this.postService.get(slug).then(post => {
      this.post = post;
    });
  }
}
