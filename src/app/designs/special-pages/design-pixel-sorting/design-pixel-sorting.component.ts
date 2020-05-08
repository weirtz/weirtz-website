import { Component, OnInit } from '@angular/core';
import { PixelsortingService } from './pixelsorting.service';

@Component({
  selector: 'app-design-pixel-sorting',
  templateUrl: './design-pixel-sorting.component.html',
  styleUrls: ['./design-pixel-sorting.component.css'],
  providers: [PixelsortingService]
})
export class DesignPixelSortingComponent implements OnInit {
  images: {id: number, linkLow: string, linkHigh: string}[] = [];

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
