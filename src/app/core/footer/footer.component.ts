import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*
    $(document).ready(function() {
      $('#querySelect').click(function() {
          const div = $('#querySelect');
          div.animate({left: '100px'}, 'slow');
          div.animate({fontSize: '5em'}, 'slow');
      });
    });
    */
    /*
    ----- Also works without document.ready -----
    $('#querySelect').click(function() {
      const div = $('#querySelect');
      div.animate({left: '100px'}, 'slow');
      div.animate({fontSize: '5em'}, 'slow');
    });
    */
  }

}
