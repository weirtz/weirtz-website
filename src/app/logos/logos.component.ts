import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent implements OnInit {

  assetsLogos = [
    {link:'../../assets/logos/morris.png', name:'morris-brothers', moreInfo:true},
    {link:'../../assets/logos/mca.png', name:'mca-tow-targets', moreInfo:false},
    {link:'../../assets/logos/finite.png', name:'finite-skies', moreInfo:true},
    {link:'../../assets/logos/chosen.png', name:'chosen-acres', moreInfo:true},
    {link:'../../assets/logos/prevail-2.png', name:'prevail-gaming-2', moreInfo:true},
    {link:'../../assets/logos/prevail.png', name:'prevail-gaming', moreInfo:true},
    {link:'../../assets/logos/paramount.png', name:'paramount-elite', moreInfo:true},
    {link:'../../assets/logos/oxygen.png', name:'oxygen', moreInfo:false},
    {link:'../../assets/logos/orbitl.png', name:'orbitl', moreInfo:false}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
