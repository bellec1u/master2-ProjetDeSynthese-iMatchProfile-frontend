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
import {ConversationsComponent} from './conversations/conversations.component';
import {OfferComponent} from './offer/offer.component';
import { Component } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';

const ROUTES: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'recruiterPost/:id', component: ListPostComponent,  canActivate: [ ProtectedGuard ]
  }, // affiche les posts d'un recruteur
  {
    path: 'post/:id', component: PostComponent
  },
  {
    path: 'profile/:id', component: CandidateProfileComponent,  canActivate: [ ProtectedGuard ]
  },
  {
    path: 'offer/:id', component: OfferComponent,  canActivate: [ ProtectedGuard ]
  },
  { // inscription
    path: 'signup', component: SignupComponent, canActivate: [ PublicGuard ]
  },
  {
    path: 'login', component: LoginComponent, canActivate: [ PublicGuard ]
  },
  {
    path: 'conversations/:id', component: ConversationsComponent,  canActivate: [ ProtectedGuard ]
  },
  // Afficher les notifications d'un candidat & recruteur 
  {
    path: 'notifications/:id', component: NotificationComponent 
  },
  // 404 page
  {
    path: '**', component: NotfoundComponent
  }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: false });
