import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

    // This makes scroll position to top as soon as you change the route
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }

}
