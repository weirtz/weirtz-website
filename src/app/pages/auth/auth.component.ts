import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: []
})

export class AuthComponent implements OnInit {


  constructor(private title: Title) { }


  ngOnInit() {
    //Set page at top
    window.scroll(0,0);
    //Sset title
    this.title.setTitle("Account Services");
  }
}
