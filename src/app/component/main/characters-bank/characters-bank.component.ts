import { Component, OnInit } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { cpus } from 'os';
import { execSync } from 'child_process';

import {AppService} from '../../../service/appService'

@Component({
  selector: 'app-characters-bank',
  templateUrl: './characters-bank.component.html',
  styleUrls: ['./characters-bank.component.css']
})
export class CharactersBankComponent implements OnInit {

     leterList : any[] ;
      leterListA : any[] ;
      leterListB: any[];
      leterListC: any[];
     
  constructor( public appService: AppService) {
         
   }

  ngOnInit() {
    
    this.appService.getLeterA().subscribe(data => this.leterListA = data) 
    this.appService.getLeterB().subscribe(data => this.leterListB = data)
    this.appService.getLeterC().subscribe(data => this.leterListC = data)


  }    

  heandelClickChar (char) {

    this.leterList = [...this.leterListA,...this.leterListB,...this.leterListC]

      let exisit = this.appService.movieChracter.indexOf(char.char) != -1;
    // check if the char that select exisit in cuurent movie
    if(exisit){ 
  
         this.appService.ListIndexDisplayed.filter((li) => {

          if(li.char){

             if(li.char.toLowerCase() == char.char && !li.visabilty){

               li.visabilty = true;

             } 
          }
       })
     } else {
      var action =  this.appService.actions();
      
     
    }
    this.leterList.filter((ch) => {

      if(ch.char == char.char){

        ch.visbilty = true;
        ch.disabilty  = true
        
      }

    })

             if(!this.appService.ListIndexDisplayed.filter((li) => li.visabilty == false )[0]){
            
                  this.appService.applyDone('win');
                  this.visDisabeld();

             }else if (action == 7) {
               
              this.appService.applyDone('die');
              this.visDisabeld()

             }
    
  }

  visDisabeld () {
      this.leterList.forEach((li) => {
        if(li.visbilty== true){
          li.visbilty = false;
  
        }
      })
  }

}
