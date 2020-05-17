import { Component, OnInit } from '@angular/core';
import { PhotographyService } from './photography.service';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css'],
  providers: [PhotographyService],
  animations:[
    trigger('galleryAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':enter', [
          //properties before animation begins
          style({ opacity:0}),
          stagger(80, [
            //animnation after
            animate('0.6s', style({ opacity:1}))
          ])
        ])
      ])
    ])
  ]
})

export class PhotographyComponent implements OnInit {
  images: {id: number, jpgLow: string, jpgHigh: string, webpLow: string, webpHigh: string}[] = [];
  
  constructor(private photographyService: PhotographyService) { }
  
  getImagesService(){
    return this.images;
  }

  ngOnInit() {
    this.images = this.photographyService.getImages();
    window.scroll(0,0);
  }

}
