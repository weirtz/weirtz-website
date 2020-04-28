import { Component, OnInit, Input } from '@angular/core';
import { LogosService } from './logos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScrollingService } from '../services/scrolling.service';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css'],
  providers: [LogosService]
})

export class LogosComponent implements OnInit {
  logos: {link: string, name: string, moreInfo: boolean}[] = [];

  constructor(private logosService: LogosService,
              private scrollingService: ScrollingService,
              private router: Router,
              private route: ActivatedRoute) {}
  
  //Call toggleModal function from scrolling.sercice
  toggleModal(){
    this.scrollingService.toggleModal();
  }

  //Getters
  getLogosService(){
    return this.logos;
  }
  
  ngOnInit() {
    this.logos = this.logosService.getLogos();
    this.scrollingService.isShowingModal = false;
  }
}  
