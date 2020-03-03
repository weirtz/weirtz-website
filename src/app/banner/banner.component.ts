import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() bTitle: string 
  @Input() bSubTitle: string 
  @Input() bLinkUrl: string 
  @Input() bLinkCopy: string 

}
