import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
import {PostComponent} from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent
  },
  {
    path: 'post/:slug',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
