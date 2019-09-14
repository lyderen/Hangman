import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {AppService} from '../../../../service/appService';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  @Output() clickChar  = new EventEmitter<string>();
    @Input() char: string ;
    
  constructor( private appService : AppService) { }

  ngOnInit() {

  }

  charClick() {

      this.clickChar.emit(this.char);
               
  }

}
