import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListPostComponent } from './list-post/list-post.component';
import { ListPostService } from './list-post/list-post.service';
<<<<<<< HEAD
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
=======
>>>>>>> 8d72ec0535f41e7a082935b967fd77a2fa03cbd8
import {PostComponent} from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListPostComponent,
    PostComponent,
<<<<<<< HEAD
    CandidateProfileComponent
=======
    HomeComponent
>>>>>>> 8d72ec0535f41e7a082935b967fd77a2fa03cbd8
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
