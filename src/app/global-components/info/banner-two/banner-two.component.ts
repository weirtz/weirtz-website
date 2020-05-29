import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-two',
  templateUrl: './banner-two.component.html',
  styleUrls: ['./banner-two.component.css']
})
export class BannerTwoComponent implements OnInit {

  @Input() bTitle: string;
  @Input() bSubTitle: string; 
  @Input() bLinkUrl: string;
  @Input() bLinkCopy: string;
  //Having attribute below on banner-two-component will add discontinued html
  @Input('is-discontinued') discontinued: boolean;
  @Input('is-development') development: boolean;

  constructor() { }

  ngOnInit() {
    this.discontinued = this.discontinued !== undefined;
    this.development = this.development !== undefined;
  }
  
}
