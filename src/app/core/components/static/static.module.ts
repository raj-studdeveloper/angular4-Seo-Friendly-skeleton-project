import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  imports: [
    CommonModule,
    StaticRoutingModule
  ],
  declarations: [ContactComponent, AboutUsComponent, TeamComponent, TermsComponent]
})
export class StaticModule { }
