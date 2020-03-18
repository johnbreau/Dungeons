import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DiceService } from './services/dice.service';
import { DDService } from './services/dd.service';
import { PokeService } from './services/pokeService.service';
import { AbilityScoreAdjustmentService } from './services/abilityScoreAdjustment.service';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

//
// Form Controls
//

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatNativeDateModule, MatCardModule } from '@angular/material';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';

const modules: any[] = [

  LayoutModule,
  MatCardModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,

  MatNativeDateModule,
  // MatMomentDateModule,

];

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
    BrowserAnimationsModule,
    ...modules,
  ],
    exports: [
      ...modules
    ],
  providers: [DiceService, AbilityScoreAdjustmentService, PokeService, DDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
