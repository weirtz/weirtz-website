import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { NavigationCancel,
         NavigationEnd,
         NavigationError,
         NavigationStart,
         Router, 
         RouterEvent
        } from '@angular/router';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ScrollingService } from 'src/app/global-services/scrolling.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  // @HostListener('window:popstate', ['$event'])
  // onPopState(event) {
  //   this.scrollingService.enable();
  // }

  //declare variables
  private h:number;
  private w: number;
  private navOpen: HTMLElement;
  private navClose: HTMLElement;
  private background: HTMLElement;
  private links: HTMLElement;
  private globalNav: HTMLElement;
  public isShowingRouteLoadIndicator : boolean;

  constructor(public router: Router, 
              private scrollingService: ScrollingService,
              @Inject(PLATFORM_ID) private platformId: Object) {

    this.isShowingRouteLoadIndicator  = false;

    this.router.events.subscribe((event: RouterEvent) => {  
      if (event instanceof NavigationStart) {
        this.isShowingRouteLoadIndicator = true;
      }
      // On NavigationEnd or NavigationError or NavigationCancel
      // set showLoadingIndicator to false
      if (event instanceof NavigationEnd ||
        event instanceof NavigationError ||
        event instanceof NavigationCancel) {
        this.isShowingRouteLoadIndicator = false;
      }
  });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      // define variables
      this.h = window.innerHeight;
      this.w = window.innerWidth;
      this.navOpen = document.getElementById("menu-open");
      this.navClose = document.getElementById("menu-close");
      this.background = document.getElementById("mobile-background");
      this.links = document.getElementById("links");
      this.globalNav = document.getElementById("global-nav");
  }

   if (isPlatformServer(this.platformId)) {
     // Server only code.
   }
}
  //toggle mobile nav in and out when clicking hamburger.
  public nav() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.navOpen.style.display === "none") {
        this.navOpen.style.display = "block";
        this.navClose.style.display = "none";
        this.background.style.display = "none";
        this.links.style.display = "none";
        this.globalNav.style.borderBottom = "1px solid rgba(0,0,0,0.08)";
      } else {
        this.navOpen.style.display = "none";
        this.navClose.style.display = "block";
        this.background.style.display = "block";
        this.links.style.display = "block";
        this.globalNav.style.borderBottom = "0px";
      }
    }
  }

  //check if window goes back to desktop size.
  public screenResize() {
    if (isPlatformBrowser(this.platformId)) {
      if(window.innerWidth > 800) {
        this.globalNav.style.borderBottom = "1px solid rgba(0,0,0,0.08)";
        this.navOpen.style.display = "block";
        this.navClose.style.display = "none";
        this.background.style.display = "none";
        this.links.style.display = "none";
      }
    }
  }

  //Remove mobile navigation. Used when clicking link in mobile nav to hide it again.
  public clearNav(){
    if (isPlatformBrowser(this.platformId)) {
      this.navOpen.style.display = "block";
      this.navClose.style.display = "none";
      this.background.style.display = "none";
      this.links.style.display = "none";
      this.globalNav.style.borderBottom = "1px solid rgba(0,0,0,0.08)";
    }
  }

  // $(window).resize(function(e) {
  //   screenResize();
  //  });
  //  // call responsive function on default :)
  //  $(document).ready(function(e) {
  //    screenResize();
  //  });
  
}
