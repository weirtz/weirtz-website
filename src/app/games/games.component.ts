import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games = [
    {id: 'haunted-showers', name: 'Haunted Showers'},
    {id:'concord', name: 'Concord'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
