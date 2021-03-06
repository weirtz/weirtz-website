import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
// import * as $ from 'jquery';
// import 'jqueryui'
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
// import * as THREE from 'three';
// import { GLTFLoader } from './node_modules/three/jsm/loader/GLTFLoader.js';
// import { AsciiEffect } from './node_modules/examples/jsm/effects/AsciiEffect.js';
// import { TrackballControls } from './examples/jsm/controls/TrackballControls.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor(private title: Title,
              @Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
  }

  ngOnInit() {
    //Set page at top
    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0,0);
    }
    
    //Set title
    this.title.setTitle("Brendan Weirtz");
  }












}
