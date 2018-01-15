import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {CandidateProfileComponent} from './candidate-profile/candidate-profile.component';
import {ListPostComponent} from './list-post/list-post.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {SignupComponent} from './signup/signup.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recruiterPost/:id', component: ListPostComponent }, // affiche les posts d'un recruteur
  { path: 'post/:id', component: PostComponent },
  { path: 'profile/:id', component: CandidateProfileComponent },
  { path: 'signup', component: SignupComponent },
  // 404 page
  {path: '**', component: NotfoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: false });
