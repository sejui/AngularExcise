import { Component, OnInit } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {PostService} from '../services/post.service';
import {Post} from '../post';
import {PostComponent} from '../post/post.component';



@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
