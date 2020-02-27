import { Component, OnInit, Input } from '@angular/core';
import { Logo } from './logo.model';
@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent implements OnInit {

  @Input() name: string;

  logos: Logo[] = [
    new Logo('Prevail Gaming', '/logos/prevail', 'prevail'),
    new Logo('Test2','asddddd','prevail.png'),
    new Logo('Test2','asddddd','asd'),
    new Logo('Test2','asddddd','asd'),
    new Logo('Test2','asddddd','asd'),
    new Logo('Test2','asddddd','asd'),
    new Logo('Test2','asddddd','asd')
  ];

  constructor() { }

  ngOnInit() {
  }

}
