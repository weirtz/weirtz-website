import { Component, OnInit } from '@angular/core';
import { PixelsortingService } from './pixelsorting.service';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-design-pixel-sorting',
  templateUrl: './design-pixel-sorting.component.html',
  styleUrls: ['./design-pixel-sorting.component.css'],
  providers: [PixelsortingService],
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
export class DesignPixelSortingComponent implements OnInit {
  images: {id: number, jpgLow: string, jpgHigh: string, webpLow: string, webpHigh: string}[] = [];

  constructor(private pixelsortingService: PixelsortingService) { }

  //Getters
  getImagesService(){
    return this.images;
  }

  ngOnInit(){
    //Get the images in the array from the service file.
    this.images = this.pixelsortingService.getImages();
  }

}
