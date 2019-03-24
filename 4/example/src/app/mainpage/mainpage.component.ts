import {Component, OnInit} from '@angular/core';
import {Post, PostService} from '../post.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.sass']
})
export class MainpageComponent implements OnInit {
  constructor(private postService: PostService) {
  }

  posts: Promise<Post[]>;

  ngOnInit() {
    this.latestPosts();
  }

  latestPosts() {
    this.posts = this.postService.latest();
  }
}
