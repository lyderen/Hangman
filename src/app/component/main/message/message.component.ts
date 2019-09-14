import { Component, OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import axios from 'axios'

import {AppService} from '../../../service/appService'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    erorrMsg: string;
    succsessMsg : string;

    msg: string ;
    counter : number;
  constructor(public appService : AppService) { 

  }

  ngOnInit() {

    this.appService.getMsgImg().subscribe((data:any) => {
       
      this.erorrMsg = data.error;
      this.succsessMsg = data.succses;

    })
   
  }
  

  refresh() {
    location.reload();
   // this.appService.getMovies();
  }
   
}
