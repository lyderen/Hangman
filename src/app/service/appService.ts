import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, Subject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

import {ILeter} from './leter'
import {IUrls} from './urlsHang';

@Injectable({ providedIn: 'root' })
export class AppService {

  ListIndexDisplayed:  any [ ] = [];
  listMovies:  any [] = [];
   counterActions : number = 1;
  missionDone : boolean = false;
  movieChracter : string [];
  Msg : string ;

  constructor(private http: HttpClient ) {
     
  }

  getUrls (): Observable<IUrls[]>{
    return this.http.get<IUrls[]>('http://localhost:3000/hangaction')
  }

    getLeterA (): Observable<ILeter[]>{
      return this.http.get<ILeter[]>('http://localhost:3000/getleterA')
    }
   
    getLeterB (): Observable<ILeter[]>{
      return this.http.get<ILeter[]>('http://localhost:3000/getleterB')
    }
    getLeterC (): Observable<ILeter[]>{
      return this.http.get<ILeter[]>('http://localhost:3000/getleterC')
    }

    getMovies (): Observable<[]>{
      return this.http.get<[]>('http://localhost:3000/getmovies')
    }

    getHangImg (): Observable<[any]>{
      return this.http.get<[any]>('http://localhost:3000/hangaction')
    }

    
    getMsgImg (): Observable<[any]>{
      return this.http.get<[any]>('http://localhost:3000/messages')
    }



  applyMovieCharacter (movie: string[]) {
      
       for (let i = 0; i < movie.length; i++){
             movie[i] = movie[i].toLowerCase()
       }

    this.movieChracter = movie;
  }

  getMovieCharacter () {
   return this.movieChracter;
  }
    
    actions () {
      this.counterActions += 1; 
      return this.counterActions 
    }

    applayListDisplayed(ari:any []) {
     this.ListIndexDisplayed = ari;
    }

   getListIndexDisplayed () {
     return this.ListIndexDisplayed;
   }

   applyMissionDone () {

     this.missionDone = true;

   }

   getMsg () {
   return this.Msg;
   }

   applyDone (msg: string) {

    this.Msg = msg;
   }
}