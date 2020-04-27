import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'jqueryui'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor() { }
  
  ngAfterViewInit(): void {

    //Draggable elements
    $(function() {
      $('.draggable').draggable();
      $('.draggable').draggable('option', 'cancel', '.inner');
      $('.draggable').draggable('option', 'containment', 'document');
    });

    //Modify z index on click window
    $('.draggable').on('mousedown', function(event) { 
        $('.draggable').css('z-index','1');
        $( this ).css('z-index','12');
        $('.header').css('cursor', 'grabbing');
    });

    //return cursor to normal after releasing header on window.
    $('.draggable').on('mouseup', function(event) { 
      $('.header').css('cursor', 'grab');
    });
  }

  ngOnInit() {
  }

}
