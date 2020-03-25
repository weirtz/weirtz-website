import { Component, OnInit, Input } from '@angular/core';
import { Logo } from './logo.model';
@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent implements OnInit {

  assetsLogos = [
    {link:'../../assets/logos/morris.png', name:'morris-brothers'},
    {link:'../../assets/logos/mca.png', name:'mca-tow-targets'},
    {link:'../../assets/logos/finite.png', name:'finite-skies'},
    {link:'../../assets/logos/chosen.png', name:'chosen-acres'},
    {link:'../../assets/logos/prevail-2.png', name:'prevail-gaming-2'},
    {link:'../../assets/logos/prevail.png', name:'prevail-gaming'},
    {link:'../../assets/logos/paramount.png', name:'paramount-elite'},
    {link:'../../assets/logos/oxygen.png', name:'oxygen'},
    {link:'../../assets/logos/orbitl.png', name:'orbitl'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
