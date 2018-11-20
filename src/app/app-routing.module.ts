import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserProfileComponent } from "./components/users/user-profile/user-profile.component";

const routes: Routes = [
    {path: 'users/profile', component: UserProfileComponent}
];

@NgModule({
    //imports: [RouterModule.forRoot(routes, {useHash: true})],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}