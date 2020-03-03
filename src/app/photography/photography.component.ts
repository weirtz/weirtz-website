import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

  assetsImages = [
    {link:'../../assets/photos/file (24).jpg', name:'p24'},
    {link:'../../assets/photos/file (23).jpg', name:'p23'},
    {link:'../../assets/photos/file (21).jpg', name:'p21'},
    {link:'../../assets/photos/file (20).jpg', name:'p20'},
    {link:'../../assets/photos/file (19).jpg', name:'p19'},
    {link:'../../assets/photos/file (18).jpg', name:'p18'},
    {link:'../../assets/photos/file (17).jpg', name:'p17'},
    {link:'../../assets/photos/file (16).jpg', name:'p16'},
    {link:'../../assets/photos/file (15).jpg', name:'p15'},
    {link:'../../assets/photos/file (14).jpg', name:'p14'},
    {link:'../../assets/photos/file (13).jpg', name:'p13'},
    {link:'../../assets/photos/file (12).jpg', name:'p12'},
    {link:'../../assets/photos/file (11).jpg', name:'p11'},
    {link:'../../assets/photos/file (10).jpg', name:'p10'},
    {link:'../../assets/photos/file (9).jpg', name:'p9'},
    {link:'../../assets/photos/file (8).jpg', name:'p8'},
    {link:'../../assets/photos/file (7).jpg', name:'p7'},
    {link:'../../assets/photos/file (6).jpg', name:'p6'},
    {link:'../../assets/photos/file (5).jpg', name:'p5'},
    {link:'../../assets/photos/file (4).jpg', name:'p4'},
    {link:'../../assets/photos/file (3).jpg', name:'p3'},
    {link:'../../assets/photos/file (2).jpg', name:'p2'},
    {link:'../../assets/photos/file (1).jpg', name:'p1'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
