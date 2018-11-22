import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserProfileComponent } from "./components/users/user-profile/user-profile.component";
import { AuthGuard } from "./services/auth-guard.service";
import { MoviesComponent } from "./components/movies/movies.component";
import { SingleMovieComponent } from "./components/single-movie/single-movie.component";

const routes: Routes = [
    {path: '', component: MoviesComponent},
    {path: 'users/profile', canActivate: [AuthGuard] , component: UserProfileComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'movies/:id', component: SingleMovieComponent}
];

@NgModule({
    //imports: [RouterModule.forRoot(routes, {useHash: true})],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}