import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListPostComponent } from './list-post/list-post.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { PostComponent } from './post/post.component';
import { APP_ROUTES } from './app.route';
import { CandidateService } from './shared/services/candidate-service/candidate.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SkillBoxComponent } from './shared/components/skill-box/skill-box.component';
import { PostService } from './shared/services/post-services/post.service';
import { FormPostComponent } from './shared/modal/form-post/form-post.component';
import { CandidateCardComponent } from './shared/components/candidate-card/candidate-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListPostComponent,
    PostComponent,
    CandidateProfileComponent,
    HomeComponent,
    NotfoundComponent,
    CandidateFormComponent,
    SkillBoxComponent,
    FormPostComponent,
    CandidateCardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [
    PostService,
    CandidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
