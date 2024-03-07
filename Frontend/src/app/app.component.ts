import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

declare let gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
  
  constructor(router:Router){
    const navEndEvents = router.events.pipe(
      filter(event=> event instanceof NavigationEnd),      
    );
    navEndEvents.subscribe((event)=> {
      if (event instanceof NavigationEnd){
        gtag('config', 'G-91YSPDJBFM',{
          'page_path': event.urlAfterRedirects
        });
      }
    });
  }
}
