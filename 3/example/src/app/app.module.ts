import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {FormComponent} from './form/form.component';
import {RouterModule} from "@angular/router";
import { IndexComponent } from './index/index.component';
import { DirectiveComponent } from './directive/directive.component';
import { ApiComponent } from './api/api.component';
import { ServiceComponent } from './service/service.component';
import { ChangeTextDirective } from './change-text.directive';
import { FillTemplateDirective } from './fill-template.directive';
import { MarkAsErrorDirective } from './mark-as-error.directive';
import { PaintItBlackDirective } from './paint-it-black.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    IndexComponent,
    DirectiveComponent,
    ApiComponent,
    ServiceComponent,
    ChangeTextDirective,
    FillTemplateDirective,
    MarkAsErrorDirective,
    PaintItBlackDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path: '',
      component: IndexComponent,
    }, {
      path: 'form',
      component: FormComponent,
    }, {
      path: 'api',
      component: ApiComponent,
    }, {
      path: 'service',
      component: ServiceComponent,
    }, {
      path: 'directive',
      component: DirectiveComponent,
    }, {
      path: '**',
      redirectTo: '/'
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
