import { Component, OnInit, Input } from '@angular/core';
import { Logo } from '../logo.model';

@Component({
  selector: 'app-logo-bundle',
  templateUrl: './logo-bundle.component.html',
  styleUrls: ['./logo-bundle.component.css']
})
export class LogoBundleComponent implements OnInit {
  @Input() name: string;
  @Input() webPath: string;
  @Input() imagePath: string;

  constructor() { }



  ngOnInit() {
  }

}
