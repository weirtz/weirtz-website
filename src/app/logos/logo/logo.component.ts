import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LogosService } from '../logos.service';
import { LogosComponent } from '../logos.component';
import { ScrollingService } from 'src/app/Services/scrolling.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  logo: {name: string, link: string, moreInfo: boolean, bannerImage: string, title: string, subtitle: string, copy: string, copy2: string};

  paramsSubscription: Subscription;

  constructor(private logosService: LogosService,
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

    //Grab the logo name from the link parameters
    const name = this.route.snapshot.params['name'];
    this.logo = this.logosService.getLogo(name);
    //Subscribe to params changes.
    this.route.params.subscribe(
      (params: Params) => {
        this.logo = this.logosService.getLogo(params['name']);
      }
    )
  }
}
