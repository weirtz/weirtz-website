import { Component, OnInit, PLATFORM_ID, Inject  } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollingService } from '../../../global-services/scrolling.service';
import { ActivatedRoute, Router, Params, UrlTree, UrlSegmentGroup, PRIMARY_OUTLET, UrlSegment} from '@angular/router';
import { PixelsortingService } from '../../../pages/designs/pages/design-pixel-sorting/pixelsorting.service';
import { PhotographyService } from '../../../pages/photography/photography.service';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-image-lightbox',
  templateUrl: './image-lightbox.component.html',
  styleUrls: ['./image-lightbox.component.css'],
  animations:[
    //Run animation after image has loaded with boolean 'loading' from 'getLoading()'
    //Animation property on HTML component checks if loaded then plays this animation.
    trigger('animationLoaded', [
      state('0', style({ opacity:1, transform: 'scale(1)' })),
      state('1', style({ opacity:0, transform: 'scale(0.7)'})),
      transition('1 => 0', animate('0.3s ease-out'))
    ])
  ]
})

export class ImageLightboxComponent implements OnInit {

  image: {id: number, jpgLow: string, jpgHigh: string, webpLow: string, webpHigh: string};
  private loadedImage: HTMLElement;
  private loading: boolean = true;

  //get url segments
  tree: UrlTree = this.router.parseUrl(this.router.url);
  g: UrlSegmentGroup = this.tree.root.children[PRIMARY_OUTLET];
  s: UrlSegment[] = this.g.segments;

  paramsSubscription: Subscription;

  constructor(private pixelsortingService: PixelsortingService,
    private scrollingService: ScrollingService,
    private photographyService: PhotographyService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object) { 

    }

  //Call toggleModal function from scrolling.sercice
  toggleModal(){
    this.scrollingService.toggleModal();
  }

  getLoading(){
    return this.loading;
  }

  imageLoaded(){
    this.loadedImage.style.display = "block";
    this.loading = false;
  }

  ngOnInit() {
    //This will disable scrolling on body if you go directly to a logo url rather than logos page first.
    this.scrollingService.isShowingModal = true;
    this.scrollingService.disable();

    if (isPlatformBrowser(this.platformId)) {
      this.loadedImage = document.getElementById("load-listener");
    }
    
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

  ngOnDestroy() {
    try {
      document.body.removeChild( this.scrollingService.getStyleTag());
    } catch (error) {
      console.warn('Clicked to exit (Did not use browser back button)');
    }
  }
} 