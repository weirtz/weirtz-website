import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: {id: string, name: string};

  constructor(private serversService: GamesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //Grab the server id from the link parameters and convert it from a string to a int with the plus symbol.
  const id = this.route.snapshot.params['game'];
  this.game = this.serversService.getGame(id);
  //Subscribe to params changes.
  this.route.params.subscribe(
    (params: Params) => {
      //Remember to use + to convert the variable from string to int.
      this.game = this.serversService.getGame(params['game']);
    }
  )

}}
