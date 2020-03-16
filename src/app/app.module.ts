import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DiceService } from './services/dice.service';
import { PokeService } from './services/pokeService.service';
import { AbilityScoreAdjustmentService } from './services/abilityScoreAdjustment.service';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSheetComponent,
    PokemonComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DiceService, AbilityScoreAdjustmentService, PokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
