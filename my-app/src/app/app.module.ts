import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ApplicationComponent } from './application/application.component';
import { AppRoutingModule } from './/app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import { PostComponent } from './post/post.component';

/* setting constant for router, link path with the component. */
const appRoutes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'application', component: ApplicationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    ApplicationComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes), /* register the router constant here */
    HttpModule /*register http service*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
