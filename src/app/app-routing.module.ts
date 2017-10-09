import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    // component: FullLayoutComponent,
    // data: {
    //   title: 'Home'
    // },
    children: [
      {
        path: 'user',
        loadChildren: 'app/core/components/login/login.module#LoginModule'
      },
      {
        path: '',
        loadChildren: 'app/core/components/static/static.module#StaticModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
