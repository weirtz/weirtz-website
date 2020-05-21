import { Component, OnInit } from '@angular/core';
import { WebService } from '../../web.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private webService: WebService) { }

  showWebNav(){
    this.webService.showWebNav();
  }

  ngOnInit(): void {

  }
}
