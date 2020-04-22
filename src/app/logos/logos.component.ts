import { Component, OnInit, Input } from '@angular/core';
import { LogosService } from './logos.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css'],
  providers: [LogosService]
})
export class LogosComponent implements OnInit {
  logos: {link: string, name: string, moreInfo: boolean}[] = [];

  constructor(private logosService: LogosService,
              private router: Router,
              private route: ActivatedRoute) {
}

  //Getters
  getLogosService(){
    return this.logos;
  }
  
  ngOnInit() {
    this.logos = this.logosService.getLogos();
  }

}  
