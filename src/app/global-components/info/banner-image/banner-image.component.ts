import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-image',
  templateUrl: './banner-image.component.html',
  styleUrls: ['./banner-image.component.css']
})
export class BannerImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() bTitle: string 
  @Input() bSubTitle: string 
  @Input() bLinkUrl: string 
  @Input() bLinkCopy: string 

}
