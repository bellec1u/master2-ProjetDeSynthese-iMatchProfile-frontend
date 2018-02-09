import { RouterModule, Routes } from '@angular/router';
import { PublicGuard, ProtectedGuard } from 'ngx-auth';

// APP COMPONENTS
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {CandidateProfileComponent} from './candidate-profile/candidate-profile.component';
import {ListPostComponent} from './list-post/list-post.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';

const ROUTES: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [ PublicGuard ]
  },
  {
    path: 'recruiterPost/:id', component: ListPostComponent,
    canActivate: [ ProtectedGuard ]
  }, // affiche les posts d'un recruteur
  {
    path: 'post/:id', component: PostComponent,
    canActivate: [ PublicGuard ]
  },
  {
    path: 'profile/:id', component: CandidateProfileComponent,
    canActivate: [ PublicGuard ]
  },
  { // inscription
    path: 'signup', component: SignupComponent,
    canActivate: [ PublicGuard ]
  },
  {
    path: 'login', component: LoginComponent,
    canActivate: [ PublicGuard ]
  },
  // 404 page
  {
    path: '**', component: NotfoundComponent,
    canActivate: [ PublicGuard ]
  }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: false });
