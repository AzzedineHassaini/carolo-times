import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {isNotAuthenticatedGuard} from "../../shared/guards/is-not-authenticated.guard";

const routes: Routes = [
  {path: '', children: [
      {path: 'register', component: RegisterComponent, canActivate: [isNotAuthenticatedGuard]},
      {path: 'login', component: LoginComponent, canActivate: [isNotAuthenticatedGuard]},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
