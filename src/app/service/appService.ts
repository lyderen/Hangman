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
    return this.http.get<IUrls[]>('https://tranquil-spire-35948.herokuapp.com/hangaction')
  }

    getLeterA (): Observable<ILeter[]>{
      return this.http.get<ILeter[]>('https://tranquil-spire-35948.herokuapp.com/getleterA')
    }
   
    getLeterB (): Observable<ILeter[]>{
      return this.http.get<ILeter[]>('https://tranquil-spire-35948.herokuapp.com/getleterB')
    }
    getLeterC (): Observable<ILeter[]>{
      return this.http.get<ILeter[]>('https://tranquil-spire-35948.herokuapp.com/getleterC')
    }

    getMovies (): Observable<[]>{
      return this.http.get<[]>('https://tranquil-spire-35948.herokuapp.com/getmovies')
    }

    getHangImg (): Observable<[any]>{
      return this.http.get<[any]>('https://tranquil-spire-35948.herokuapp.com/hangaction')
    }

    
    getMsgImg (): Observable<[any]>{
      return this.http.get<[any]>('https://tranquil-spire-35948.herokuapp.com/messages')
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