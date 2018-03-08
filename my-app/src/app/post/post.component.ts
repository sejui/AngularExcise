import { Component, OnInit } from '@angular/core';

import {PostService} from '../services/post.service';
import {Post} from '../post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  _posts: Post[];
  private title;
  private body;
  private newPost;
  constructor(private _postService: PostService) {

  }

  ngOnInit() {
    // subscribe to the post service, so it will listen to the response and store in _posts.
    this._postService.getPosts().subscribe(
      response => this._posts = response.json()
    );
  }

}
