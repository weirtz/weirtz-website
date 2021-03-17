import { Component } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;

  constructor(private router: Router) {

    console.log( [
'                              __',                                             
'                    __       /\\ \\__',                                          
'  __  __  __    __ /\\_\\  _ __\\ \\ ,_\\   ____         ___    ___     ___ ___',
' /\\ \\/\\ \\/\\ \\  /`__`\\/\\ \\/\\``__\\ \\ \\/ /\\_ ,`\\      /`___\\ / __`\\ /` __` __`\\',
' \\ \\ \\_/ \\_/ \\/\\  __/\\ \\ \\ \\ \\/ \\ \\ \\_\\/_/  /_  __/\\ \\__//\\ \\L\\ \\/\\ \\/\\ \\/\\ \\',
'  \\ \\___x___/`\\ \\____\\  \\_\\ \\_\\  \\ \\__\\ /\\____\\/\\_\\ \\____\\ \\____/\\ \\_\\ \\_\\ \\_\\',
'   \\/__//__/   \\/____/ \\/_/\\/_/   \\/__/ \\/____/\\/_/\\/____/\\/___/  \\/_/\\/_/\\/_/'
                                                                             
                                                                             
		].join( '\n' ) );

    this.router.events.subscribe((event: Event) => {
      
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }


    
    

}