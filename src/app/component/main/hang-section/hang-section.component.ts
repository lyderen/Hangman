import { Component, OnInit } from '@angular/core';
import axios from 'axios';


import {AppService} from '../../../service/appService';

@Component({
  selector: 'app-hang-section',
  templateUrl: './hang-section.component.html',
  styleUrls: ['./hang-section.component.css']
})
export class HangSectionComponent implements OnInit {
     hangmnaUrl :any []
     currentImg : string; 
     
     

  constructor( public appService: AppService ) {
     
   
   }
  
  ngOnInit() {

    this.appService.getHangImg().subscribe(data => this.hangmnaUrl = data)

  
  }

  getCurrentImage(index : number) {
    try{

      return this.hangmnaUrl[index]

    } catch {

    }

  

  }

}
