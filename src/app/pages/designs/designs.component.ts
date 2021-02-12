import { Component, OnInit } from '@angular/core';
import { DesignsService } from './designs.service';
import { Title } from '@angular/platform-browser';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
import { LogosService } from '../logos/logos.service';
import { ScrollingService } from '../../global-services/scrolling.service';
import { LoaderService } from '../logos/loader.service';

@Component({
  selector: 'app-design',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css', './logos.component.css'],
  providers: [DesignsService],
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

export class DesignsComponent implements OnInit {
  //copy designs array from service.
  designs: {url: string, filter: string, title: string, thumbnail: string}[] = []
  logos: {link: string, name: string, moreInfo: boolean}[] = [];

  showLogos: boolean = false; //Hide accordian content on headers.
  showDesigns: boolean = false; //Hide accordian content on headers.
  showDigital: boolean = false; //Hide accordian content on headers.

  constructor(private designsService: DesignsService,
              private title: Title,
              private logosService: LogosService,
              private scrollingService: ScrollingService,
              private loaderService: LoaderService) { }

  getDesignsService(){
    return this.designs;
  }

  //Call toggleModal function from scrolling.sercice
  toggleModal(){
    this.scrollingService.toggleModal();
  }

  //Getters
  getLogosService(){
    return this.logos;
  }

  ngOnInit() {
    //get designs from service on load
    this.designs = this.designsService.getDesigns();
    this.logos = this.logosService.getLogos();
    this.scrollingService.isShowingModal = false;
    //Set page at top
    window.scroll(0,0);
    this.title.setTitle("Design");
  }
}
