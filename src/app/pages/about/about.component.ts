import { Component, OnInit, AfterViewInit } from '@angular/core';
// import * as $ from 'jquery';
// import 'jqueryui'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor(private title: Title) { }

  ngAfterViewInit(): void {
  }
  //   //Draggable elements
  //   $(function() {
  //     //init draggable elements
  //     $('.draggable').draggable({
  //       //draggable scripts

  //       //return to origianl spot
  //       revert : function(event, ui) {
          
  //         $(this).data("uiDraggable").originalPosition = {
  //             top : 0,
  //             left : 0
  //         };
  //         return !event;
  //       }
  //     });

  //     //draggable properties.
  //     $('.draggable').draggable('option', 'cancel', '.inner');
  //     $('.draggable').draggable('option', 'containment', 'document');
  //   });

  //   //Modify z index on click window
  //   $('.draggable').on('mousedown', function(event) { 
  //       $('.draggable').css('z-index','1');
  //       $( this ).css('z-index','9');
  //       $('.header').css('cursor', 'grabbing');
  //   });

  //   //return cursor to normal after releasing header on window.
  //   $('.draggable').on('mouseup', function(event) { 
  //     $('.header').css('cursor', 'grab');
  //   });
  // }

  ngOnInit() {
    //Set page at top
    window.scroll(0,0);
    //Set title
    this.title.setTitle("Brendan Weirtz");
  }

}
