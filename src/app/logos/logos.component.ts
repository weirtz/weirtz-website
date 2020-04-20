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
  private logos: {link: string, name: string, moreInfo: boolean}[] = [];

  constructor(private logosService: LogosService,
              private router: Router,
              private route: ActivatedRoute) {
}

  ngOnInit() {
    this.logos = this.logosService.getLogos();
  }

}  
