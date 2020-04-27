import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jqueryui'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //Draggable elements
    $(function() {
      $( ".draggable" ).draggable();
      cancel: ".inner"
      revert: true
      revertDuration: 200
    });
  
  var cancel = $( ".inner" ).draggable( "option", "cancel" );
   
   // Setter
   $( ".inner" ).draggable( "option", "cancel", ".header" );
    
  }

}
