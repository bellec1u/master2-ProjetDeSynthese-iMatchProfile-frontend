import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListPostComponent } from './list-post/list-post.component';
import { ListPostService } from './list-post/list-post.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
