import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import {AppService} from '../../../service/appService';

@Component({
  selector: 'app-characters-movie',
  templateUrl: './characters-movie.component.html',
  styleUrls: ['./characters-movie.component.css']
})
export class CharactersMovieComponent implements OnInit {
    movies: string[ ] = [];
    randomMovie: any ;
    movieStrLength: any ;
    randomlyCharNum: Number;
    listMovieChar: string[];
    indexRandom:Number [];
    listIndexVisabilty: any [];
    movieCharacter: string [];
    


  constructor(  private appService : AppService,) {
        this.listIndexVisabilty = appService.getListIndexDisplayed();
   }

  ngOnInit() {
    

    this.appService.getMovies().subscribe(data => {

      this.randomMovie = data[Math.floor(Math.random() * data.length)];
      this.movieStrLength  = this.randomMovie.title.replace(/\s/g, "").length;
      this.listMovieChar =this.randomMovie.title.split("")
      this.randomlyCharNum = Math.round(this.movieStrLength / 3);
      
      let movieCharacter =this.randomMovie.title.replace(/\s/g, "").split("");
      this.appService.applyMovieCharacter(movieCharacter)
       
      this.randomIndexShow();

    }) 

    // axios.get('http://localhost:3000/getmovies').then((respons) => {

    //    this.randomMovie = respons.data[Math.floor(Math.random() * respons.data.length)].title;
    //   this.movieStrLength  = this.randomMovie.replace(/\s/g, "").length;
    //   this.listMovieChar = this.randomMovie.split("")
    //   this.randomlyCharNum = Math.round(this.movieStrLength / 3);
      
    //   let movieCharacter = this.randomMovie.replace(/\s/g, "").split("");
    //   this.appService.applyMovieCharacter(movieCharacter)
       
    //   this.randomIndexShow();

     
    // })
      
     
   

  }

    private randomIndexShow  = () =>  {
    let randonIndexss = []

    while (randonIndexss.length <= this.randomlyCharNum) {
            
      let random = Math.floor(Math.random() * Math.floor(this.movieStrLength));

      randonIndexss.indexOf(random) == -1 ? randonIndexss.push(random) : null
    } 
    this.indexRandom = randonIndexss;

    this.listCharIndex()

      
   }

 private listCharIndex = () => {       
      let listIndexVisabilty :any [] = [];
      let index = this.randomlyCharNum


    for(let i = 0; i < this.listMovieChar.length;i++){
       let char = this.listMovieChar[i];

             if(char != " "){

               this.indexRandom.indexOf(i) != -1 ? listIndexVisabilty.push({char,visabilty:true}) : listIndexVisabilty.push({char,visabilty:false})                
              } else {
                //listIndexVisabilty.splice(i,1," ")
                listIndexVisabilty.push({char:undefined,visabilty:true})
              }      
      }
           this.listIndexVisabilty = listIndexVisabilty 
           this.appService.applayListDisplayed(this.listIndexVisabilty)
    }
 
   

 



}
