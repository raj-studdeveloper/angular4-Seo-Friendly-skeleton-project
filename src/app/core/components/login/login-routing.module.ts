import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: 'signin',
            component: SigninComponent,
            data: {
            title: 'Quiz - Sign In'
            },
        },
        {
            path: 'signup',
            component: SignupComponent,
            data: {
            title: 'Quiz - Sign Up'
            },
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
