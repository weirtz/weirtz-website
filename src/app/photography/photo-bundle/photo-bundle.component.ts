import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-bundle',
  templateUrl: './photo-bundle.component.html',
  styleUrls: ['./photo-bundle.component.css']
})
export class PhotoBundleComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
