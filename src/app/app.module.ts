import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DiceService } from './services/dice.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSheetComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
