import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/users/login/login.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth-guard.service';
import { MoviesComponent } from './components/movies/movies.component';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import { CommentsComponent } from './components/comments/comments.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UserProfileComponent,
    MoviesComponent,
    SingleMovieComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [
    LoginService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
