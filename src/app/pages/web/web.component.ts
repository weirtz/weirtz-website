import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service'
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css'],
  providers: [WebService]
})
export class WebComponent implements OnInit {
  websites: {url: string, title: string, thumbnail: string}[] = []
  private sidebar: HTMLElement;
  private sidebarBackground: HTMLElement;


  constructor(private webService: WebService) { }

  getWebsitesService(){
    return this.websites;
  }

  public clearWebNav(){
    this.sidebar.style.display = "none";
    this.sidebarBackground.style.display = "none";
  }

  public showWebNav(){
    this.sidebar.style.display = "block";
    this.sidebarBackground.style.display = "block";
  }

  ngOnInit() {
    //get designs from service on load
    this.websites = this.webService.getDesigns();
    window.scroll(0,0);

    this.sidebar = document.getElementById("sidebar");
    this.sidebarBackground = document.getElementById("sidebar-background");

  }

}
