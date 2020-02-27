import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-bundle',
  templateUrl: './game-bundle.component.html',
  styleUrls: ['./game-bundle.component.css']
})
export class GameBundleComponent implements OnInit {
  @Input() title: string;
  @Input() banner: string;
  constructor() { }

  ngOnInit() {
  }

}
