import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

  assetsImages = [
    '../../assets/photos/file (24).jpg',
    '../../assets/photos/file (23).jpg',
    '../../assets/photos/file (21).jpg',
    '../../assets/photos/file (20).jpg',
    '../../assets/photos/file (19).jpg',
    '../../assets/photos/file (18).jpg',
    '../../assets/photos/file (17).jpg',
    '../../assets/photos/file (16).jpg',
    '../../assets/photos/file (15).jpg',
    '../../assets/photos/file (14).jpg',
    '../../assets/photos/file (13).jpg',
    '../../assets/photos/file (12).jpg',
    '../../assets/photos/file (11).jpg',
    '../../assets/photos/file (10).jpg',
    '../../assets/photos/file (9).jpg',
    '../../assets/photos/file (8).jpg',
    '../../assets/photos/file (7).jpg',
    '../../assets/photos/file (6).jpg',
    '../../assets/photos/file (5).jpg',
    '../../assets/photos/file (4).jpg',
    '../../assets/photos/file (3).jpg',
    '../../assets/photos/file (2).jpg',
    '../../assets/photos/file (1).jpg'
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
