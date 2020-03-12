import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GamesService } from './games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GamesService]
})

export class GamesComponent implements OnInit {
  private games: {id: string, name: string}[] = [];

  constructor(private gamesService: GamesService,
    private router: Router,
    private route: ActivatedRoute) {
}


  ngOnInit() {
    this.games = this.gamesService.getGames();
  }


}

    

