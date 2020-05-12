import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollingService } from 'src/app/services/scrolling.service';
import { ActivatedRoute, Router, Params, UrlTree, UrlSegmentGroup, PRIMARY_OUTLET, UrlSegment } from '@angular/router';
import { PixelsortingService } from '../../designs/special-pages/design-pixel-sorting/pixelsorting.service';
import { PhotographyService } from '../../photography/photography.service';

@Component({
  selector: 'app-image-lightbox',
  templateUrl: './image-lightbox.component.html',
  styleUrls: ['./image-lightbox.component.css']
})
export class ImageLightboxComponent implements OnInit {
  image: {id: number, jpgLow: string, jpgHigh: string, webpLow: string, webpHigh: string};

  //get url segments
  tree: UrlTree = this.router.parseUrl(this.router.url);
  g: UrlSegmentGroup = this.tree.root.children[PRIMARY_OUTLET];
  s: UrlSegment[] = this.g.segments;

  paramsSubscription: Subscription;

  constructor(private pixelsortingService: PixelsortingService,
    private scrollingService: ScrollingService,
    private photographyService: PhotographyService,
    private route: ActivatedRoute,
    private router: Router) { 
      //grab URL segments from URL to determine which service to use for retrieving images.
      
      
    }

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

    //Determine what service to use, depending on which page you are on.
    if(this.s[1].path == 'pixel-sorting'){
      this.image = this.pixelsortingService.getImage(id);
    }else if(this.s[0].path == 'photography'){
      this.image = this.photographyService.getImage(id);
    }
    
    //Subscribe to params changes.
    this.route.params.subscribe(
      (params: Params) => {
        
        if(this.s[1].path == 'pixel-sorting'){
          this.image = this.pixelsortingService.getImage(+params['id']);
        }else if(this.s[0].path == 'photography'){
          this.image = this.photographyService.getImage(+params['id']);
        }
      }
    )
  }
} 