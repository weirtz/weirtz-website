import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service'
import { Router} from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css'],
  providers: [WebService]
})
export class WebComponent implements OnInit {
  websites: {url: string, title: string, thumbnail: string}[] = []
  private styleTag: HTMLStyleElement;

  constructor(private webService: WebService, 
              private router: Router,
              private title: Title) {}

  getWebsitesService(){
    return this.websites;
  }

  clearWebNav(){
    this.webService.clearWebNav();
  }

  showWebNav(){
    this.webService.showWebNav();
  }
  
  private buildStyleElement() : HTMLStyleElement {
		var style = document.createElement( "style" );

		style.type = "text/css";
		style.setAttribute( "data-debug", "Injected by scrollingService." );
		style.textContent = `
			app-footer {
        display: none !important ;
      }
      body{
        overflow: hidden !important;
      }
		`;
		return( style );
	}

  ngOnInit() {
    //get designs from service on load
    this.websites = this.webService.getDesigns();
    window.scroll(0,0);
    //Set up mobile sidebar
    this.webService.setSideBar(document.getElementById("sidebar"));
    this.webService.setSidebarBackground(document.getElementById("sidebar-background"));
    //Remove footer
    this.styleTag = this.buildStyleElement();
    document.body.appendChild( this.styleTag );
    //Set title
    this.title.setTitle("Web Development");
  }

  ngOnDestroy() {
    document.body.removeChild( this.styleTag );
  }

}
