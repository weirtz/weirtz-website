import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogosService } from 'src/app/logos/logos.service';
import { ScrollingService } from 'src/app/services/scrolling.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PixelsortingService } from '../pixelsorting.service';

@Component({
  selector: 'app-pixelsorting-viewer',
  templateUrl: './pixelsorting-viewer.component.html',
  styleUrls: ['./pixelsorting-viewer.component.css']
})
export class PixelsortingViewerComponent implements OnInit {
  image: {id: number, linkLow: string, linkHigh: string};

  paramsSubscription: Subscription;

  constructor(private pixelsortingService: PixelsortingService,
              private scrollingService: ScrollingService,
              private route: ActivatedRoute,
              private router: Router) { }

  //Call toggleModal function from scrolling.sercice
  toggleModal(){
    this.scrollingService.toggleModal();
  }

  ngOnInit() {
    //This will disable scrolling on body if you go directly to a logo url rather than logos page first.
    this.scrollingService.isShowingModal = true;
    this.scrollingService.disable();

    //Grab the image id from the link parameters
    const id = +this.route.snapshot.params['id'];
    this.image = this.pixelsortingService.getImage(id);
    //Subscribe to params changes.
    this.route.params.subscribe(
      (params: Params) => {
        this.image = this.pixelsortingService.getImage(+params['id']);
      }
    )
  }
}