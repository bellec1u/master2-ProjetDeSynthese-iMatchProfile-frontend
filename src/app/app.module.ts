import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListPostComponent } from './list-post/list-post.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { PostComponent } from './post/post.component';

import { ListPostService } from './list-post/list-post.service';
import { PostService } from './shared/services/post-services/post.service';
import { CandidateService } from './shared/services/candidate-service/candidate.service';

import { APP_ROUTES } from './app.route';
import {HttpClientModule} from '@angular/common/http';
import { SkillBoxComponent } from './skill-box/skill-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListPostComponent,
    PostComponent,
    CandidateProfileComponent,
    HomeComponent,
    SkillBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [
    ListPostService,
    PostService,
    CandidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
