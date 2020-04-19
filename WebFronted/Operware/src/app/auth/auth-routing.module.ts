import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthLayoutComponent} from '../@core/layouts/auth-layout/auth-layout.component';


const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {
        path: '', component: LoginComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
