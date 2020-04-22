import { Component, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LogosService } from '../logos.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  logo: {name: string, link: string, moreInfo: boolean, title: string, subtitle: string, copy: string, copy2: string};

  paramsSubscription: Subscription;

  constructor(private logosService: LogosService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
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
