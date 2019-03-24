import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import {PostComponent} from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsletterComponent} from './newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    PostComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
