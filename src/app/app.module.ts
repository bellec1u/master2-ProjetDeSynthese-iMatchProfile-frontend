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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SkillBoxComponent } from './shared/components/skill-box/skill-box.component';
import { PostService } from './shared/services/post-service/post.service';
import { FormPostComponent } from './shared/modal/form-post/form-post.component';
import { CandidateCardComponent } from './shared/components/candidate-card/candidate-card.component';
import { PostCardComponent} from './shared/components/post-card/post-card.component';
import { SkillService } from './shared/services/skill-service/skill.service';
import { FormCandidateProfileComponent } from './shared/components/form-candidate-profile/form-candidate-profile.component';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { SignupComponent } from './signup/signup.component';
import { RecruiterService } from './shared/services/recruiter-service/recruiter.service';
import { LoginComponent } from './login/login.component';
import { AuthenticationModule } from './shared/authentication/authentication.module';
import { ConversationsComponent } from './conversations/conversations.component';
import { ConversationService } from './shared/services/conversation-service/conversation.service';
import { OfferComponent } from './offer/offer.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './shared/services/notification-service/notification.service';
import {NgArrayPipesModule} from 'ngx-pipes';

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
    SkillBoxComponent,
    FormPostComponent,
    CandidateCardComponent,
    PostCardComponent,
    FormCandidateProfileComponent,
    SignupComponent,
    LoginComponent,
    ConversationsComponent,
    OfferComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTES,
    DateValueAccessorModule,
    AuthenticationModule,
    NgArrayPipesModule
  ],
  providers: [
    PostService,
    CandidateService,
    RecruiterService,
    SkillService,
    ConversationService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
