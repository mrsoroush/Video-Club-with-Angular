import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/users/login/login.component";

const routes: Routes = [
    {path: 'users/login', component: LoginComponent}
];

@NgModule({
    //imports: [RouterModule.forRoot(routes, {useHash: true})],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}