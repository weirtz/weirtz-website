import { Component, OnInit, Input } from '@angular/core';
import { LogosService } from './logos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScrollingService } from '../../global-services/scrolling.service';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
import { LoaderService } from './loader.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css'],
  providers: [LogosService],
  animations:[
    trigger('logoAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':enter', [
          //properties before animation begins
          style({ opacity:0, transform: 'scale(0)' }),
          stagger(80, [
            //animnation after
            animate('0.3s', style({ opacity:1, transform: 'scale(1)' }))
          ])
        ])
      ])
    ])
  ]
})

export class LogosComponent implements OnInit {
  logos: {link: string, name: string, moreInfo: boolean}[] = [];

  constructor(private logosService: LogosService,
              private scrollingService: ScrollingService,
              private loaderService: LoaderService,
              private title: Title) {}
  
  //Call toggleModal function from scrolling.sercice
  toggleModal(){
    this.scrollingService.toggleModal();
  }

  //Getters
  getLogosService(){
    return this.logos;
  }

  ngOnInit() {
    //get logos
    this.logos = this.logosService.getLogos();
    this.scrollingService.isShowingModal = false;
    //Set window at top
    window.scroll(0,0);
    //Set title
    this.title.setTitle("Custom Logos");
  }
}  
