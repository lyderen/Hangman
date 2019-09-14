import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-character-movie',
  templateUrl: './character-movie.component.html',
  styleUrls: ['./character-movie.component.css']
})
export class CharacterMovieComponent implements OnInit {
   @Input() char: object;
   @Input () listIndexVisabilty : []
  
   visabilty : boolean = false;
   index: Number;


  constructor() { }

  ngOnInit() {
    
 var a  = this.char;
  }

}
