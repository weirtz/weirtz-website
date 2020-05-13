import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Event,
         NavigationCancel,
         NavigationEnd,
         NavigationError,
         NavigationStart,
         Router, 
         RouterEvent,
         RouteConfigLoadStart,
         RouteConfigLoadEnd
        } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  //declare variables
  private h:number;
  private w: number;
  private navOpen: HTMLElement;
  private navClose: HTMLElement;
  private background: HTMLElement;
  private links: HTMLElement;
  private globalNav: HTMLElement;

  public isShowingRouteLoadIndicator : boolean;
  


  constructor(public router: Router) {

    this.isShowingRouteLoadIndicator  = false;
    var asyncLoadCount = 0;

    this.router.events.subscribe((event: RouterEvent) : void => {  
    if(event instanceof RouteConfigLoadStart){
      asyncLoadCount++;
    }else if(event instanceof RouteConfigLoadEnd){
      asyncLoadCount--;
    }
    this.isShowingRouteLoadIndicator = !! asyncLoadCount;
  });
  }

  ngOnInit() {
    // define variables
    this.h = window.innerHeight;
    this.w = window.innerWidth;
    this.navOpen = document.getElementById("menu-open");
    this.navClose = document.getElementById("menu-close");
    this.background = document.getElementById("mobile-background");
    this.links = document.getElementById("links");
    this.globalNav = document.getElementById("global-nav");
  }

  //toggle mobile nav in and out when clicking hamburger.
  public nav() {
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

  //check if window goes back to desktop size.
  public screenResize() {
    if(window.innerWidth > 800) {
      this.globalNav.style.borderBottom = "1px solid rgba(0,0,0,0.08)";
      this.navOpen.style.display = "block";
      this.navClose.style.display = "none";
      this.background.style.display = "none";
      this.links.style.display = "none";
    }
  }

  //Remove mobile navigation. Used when clicking link in mobile nav to hide it again.
  public clearNav(){
    this.navOpen.style.display = "block";
    this.navClose.style.display = "none";
    this.background.style.display = "none";
    this.links.style.display = "none";
    this.globalNav.style.borderBottom = "1px solid rgba(0,0,0,0.08)";
  }

  // $(window).resize(function(e) {
  //   screenResize();
  //  });
  //  // call responsive function on default :)
  //  $(document).ready(function(e) {
  //    screenResize();
  //  });
  
}
