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

  constructor(private webService: WebService) { }

  getWebsitesService(){
    return this.websites;
  }

  ngOnInit() {
    //get designs from service on load
    this.websites = this.webService.getDesigns();
    window.scroll(0,0);
  }

}
