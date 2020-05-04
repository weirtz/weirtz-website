import { Component, OnInit } from '@angular/core';
import { DesignsService } from './designs.service';

@Component({
  selector: 'app-design',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css'],
  providers: [DesignsService]
})
export class DesignsComponent implements OnInit {
  //copy designs array from service.
  designs: {url: string, filter: string, title: string, thumbnail: string}[] = []

  constructor(private designsService: DesignsService) { }

  getDesignsService(){
    return this.designs;
  }

  ngOnInit() {
    //get designs from service on load
    this.designs = this.designsService.getDesigns();
  }
}
