import { Component, OnInit } from '@angular/core';

import {PostService} from '../services/post.service';
import {Post} from '../post';
import index from '@angular/cli/lib/cli';


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
  private content;
  public errorMsg: string;
  constructor(private _postService: PostService) {

  }

  ngOnInit() {
    // subscribe to the post service, so it will listen to the response and store in _posts.
    this._postService.getPosts().subscribe(
      response => this._posts = response,  /* wait for a response from subscribe and put the answer in _posts object */
            error => {
              this.errorMsg = error;
              console.log(this.errorMsg);
            });
  }

    // gotta pass the whole post object, then retrieve the index for splice
    delete(post) {
    console.log(post);
    this._postService.deletePosts(post.id).subscribe(
      response => {
        const indexPost = this._posts.indexOf(post);
        // remove 1 post by using splice
        this._posts.splice(indexPost, 1);
      }
    );
    }
    updateClicked(post) {
    console.log('boolean: ' + post.updateClicked);
      post.updateClicked = !post.updateClicked;
    }
    updateSubmit(post) {
      const indexPost = this._posts.indexOf(post);
      this._postService.update(post, post.title).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }
}
