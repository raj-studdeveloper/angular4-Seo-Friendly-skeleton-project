import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: 'about-us',
            component: AboutUsComponent,
            data: {
            title: 'XYZ - about Us'
            },
        },
        {
            path: 'contact-us',
            component: ContactComponent,
            data: {
            title: 'XYZ - Contact Us'
            },
        },
        {
            path: 'terms',
            component: TermsComponent,
            data: {
            title: 'XYZ - Terms & Conditions'
            },
        },
        {
            path: 'team',
            component: TeamComponent,
            data: {
            title: 'XYZ - Team'
            },
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
