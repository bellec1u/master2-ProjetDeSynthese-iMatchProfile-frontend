import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {CandidateProfileComponent} from './candidate-profile/candidate-profile.component';
import {ListPostComponent} from './list-post/list-post.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'listpost', component: ListPostComponent},
  { path: 'post/:id', component: PostComponent },
  { path: 'profile/:id', component: CandidateProfileComponent },

  // TODO faire un component 404
  {path: '**', component: HomeComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: false });
