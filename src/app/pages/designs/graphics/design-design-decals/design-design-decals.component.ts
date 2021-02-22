import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-design-design-decals',
  templateUrl: './design-design-decals.component.html',
  styleUrls: ['./design-design-decals.component.css']
})
export class DesignDesignDecalsComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
    window.scroll(0,0);
  }
}
