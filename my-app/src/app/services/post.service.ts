import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Post} from '../post';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  private _url = 'http://jsonplaceholder.typicode.com/posts'; /* URL of the API */
  constructor(private _http: Http) {

  }

  getPosts() {
    return this._http.get(this._url);
  }

  addPost(newPost) {

  }


}
