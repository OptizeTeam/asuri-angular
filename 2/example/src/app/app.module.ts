import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { WithDataComponent } from './with-data/with-data.component';
import { TargetComponent } from './target/target.component';
import { TargetIdComponent } from './target-id/target-id.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IndexComponent,
    WithDataComponent,
    TargetComponent,
    TargetIdComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '',
      component: IndexComponent,
    }, {
      path: 'redirectMe',
      redirectTo: '/target'
    }, {
      path: 'withData',
      component: WithDataComponent,
      data: {foo: 'bar'}
    }, {
      path: 'target',
      component: TargetComponent,
      pathMatch: 'full'
    }, {
      path: 'target/:id',
      component: TargetIdComponent
    }, {
      path: '**',
      component: Error404Component
    }], {
      enableTracing: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
