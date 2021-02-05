import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
// import * as $ from 'jquery';
// import 'jqueryui'
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private title: Title,
              @Inject(PLATFORM_ID) private platformId: Object) { }

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
    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0,0);
    }
    
    //Set title
    this.title.setTitle("Brendan Weirtz");
  }

}
