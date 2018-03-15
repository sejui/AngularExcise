import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Post} from '../post';
import 'rxjs/add/operator/map';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class PostService {

  private _url = 'http://jsonplaceholder.typicode.com/posts'; /* URL of the API */
  constructor(private _http: HttpClient) {

  }

  getPosts() {
    return this._http.get<Post[]>(this._url)  /* get the data from url and put into Post interface, and catch its error if has one */
      .catch(this.errorHandler);
  }
  deletePosts(id: string) {
    console.log(typeof this._http.delete(this._url + '/' + id));
    return  this._http.delete(this._url + '/' + id);
  }
  // if updating whole object, use PUT, if update portion, use PATCH
  update(newPost: Post, newContent: string) {
    return this._http.patch(this._url + '/' + newPost.id, newContent); /* cast it into JSON format -> key:value */
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server error');
  }


}
