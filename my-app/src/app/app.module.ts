import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ApplicationComponent } from './application/application.component';
import { AppRoutingModule } from './/app-routing.module';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'application', component: ApplicationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
