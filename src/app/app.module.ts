import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';
import { CharactersMovieComponent } from './component/main/characters-movie/characters-movie.component';
import { CharactersBankComponent } from './component/main/characters-bank/characters-bank.component';
import { MessageComponent } from './component/main/message/message.component';
import { HangSectionComponent } from './component/main/hang-section/hang-section.component';
import { CharactersComponent } from './component/main/characters-bank/characters/characters.component';
import { CharacterMovieComponent } from './component/main/characters-movie/character-movie/character-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CharactersMovieComponent,
    CharactersBankComponent,
    MessageComponent,
    HangSectionComponent,
    CharactersComponent,
    CharacterMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
