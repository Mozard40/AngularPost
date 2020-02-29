import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import component
import { PostlistComponent } from './postlist/postlist.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';



const routes: Routes = [
  { path: 'postlist', component: PostlistComponent },
  { path: 'postlist/:id', component: PostListItemComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: '', component: PostlistComponent },
  { path: 'not-found', component: FourohfourComponent  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
