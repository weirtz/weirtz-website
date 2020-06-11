import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {

  private marks = [
    {url: '/assets/misc/mark/mark1.jpg'},
    {url: '/assets/misc/mark/mark2.jpg'},
    {url: '/assets/misc/mark/mark3.jpg'},
    {url: '/assets/misc/mark/mark5.jpg'},
    {url: '/assets/misc/mark/mark6.jpg'},
    {url: '/assets/misc/mark/mark7.jpg'},
    {url: '/assets/misc/mark/mark8.png'},
    {url: '/assets/misc/mark/mark9.gif'}
  ];

  constructor(private route:ActivatedRoute,private router:Router) { 
    let index = Math.floor(Math.random() * (this.marks.length - 0));
    window.location.assign(this.marks[index].url);
  }

  ngPre
  ngOnInit(): void {
  }

}
