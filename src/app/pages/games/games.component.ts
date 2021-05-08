import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GamesService } from './games.service';
import { Title } from '@angular/platform-browser';

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
    private route: ActivatedRoute,
    private title: Title) {
}

  //Getters
  getRouter(){
    return this.router;
  }

  getGames(){
    return this.games;
  }

  ngOnInit() {
    this.games = this.gamesService.getGames();
    window.scroll(0,0);
    //Set title
    this.title.setTitle("Game Development");

  }
}

    

