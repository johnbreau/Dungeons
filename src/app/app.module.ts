import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

import { AppComponent } from './app.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DiceService } from './services/dice.service';
import { DDService } from './services/dd.service';
import { AbilityScoreAdjustmentService } from './services/abilityScoreAdjustment.service';
import { SavingThrowAndModifierService } from './services/savingThrowService.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ObserversModule } from '@angular/cdk/observers';


import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { ModuleWithProviders } from "@angular/core";
import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MapBuilderComponent } from './components/map-builder/map-builder.component';
import { CharacterDisplayComponent } from './components/character-display/character-display.component';

// import { MatMomentDateModule } from '@angular/material-moment-adapter';

// // Ahead of time compiles requires an exported function for factories
// export function migrationFactory() {
//   // The animal table was added with version 2 but none of the existing tables or data needed
//   // to be modified so a migrator for that version is not included.
//   return {
//     1: (db, transaction) => {
//       const store = transaction.objectStore('characters');
//       store.createIndex('country', 'country', { unique: false });
//     },
//     3: (db, transaction) => {
//       const store = transaction.objectStore('characters');
//       store.createIndex('age', 'age', { unique: false });
//     }
//   };
// }

// const dbConfig: DBConfig  = {
//   name: 'MyDb',
//   version: 3,
//   objectStoresMeta: [{
//     store: 'characters',
//     storeConfig: { keyPath: 'id', autoIncrement: true },
//     storeSchema: [
//       { name: 'name', keypath: 'name', options: { unique: false } },
//       { name: 'email', keypath: 'email', options: { unique: false } }
//       // { characterName: 'characterName', keypath: 'characterName', options: { unique: false } },
//       // { characterClass: 'characterClass', keypath: 'characterClass', options: { unique: false } },
//       // { characterLevel: 'characterLevel', keypath: 'characterLevel', options: { unique: false } },
//       // { characterStrength: 'characterStrength', keypath: 'characterStrength', options: { unique: false } },
//       // { characterDexterity: 'characterDexterity', keypath: 'characterDexterity', options: { unique: false } }
//     ]
//   }], 
//   // provide the migration factory to the DBConfig
//   migrationFactory
// };
const dbConfig: DBConfig  = {
  name: 'DungeonsCharacterRecords',
  version: 1,
  objectStoresMeta: [{
    store: 'charactersDb',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'characterName', keypath: 'characterName', options: { unique: false } },
      { name: 'characterClass', keypath: 'characterClass', options: { unique: false } },
      { name: 'characterLevel', keypath: 'characterLevel', options: { unique: false } },
      { name: 'characterStrength', keypath: 'characterStrength', options: { unique: false } },
      { name: 'characterDexterity', keypath: 'characterDexterity', options: { unique: false } },
      { name: 'characterConstitution', keypath: 'characterConstitution', options: { unique: false } },
      { name: 'characterIntelligence', keypath: 'characterIntelligence', options: { unique: false } },
      { name: 'characterWisdom', keypath: 'characterWisdom', options: { unique: false } },
      { name: 'characterCharisma', keypath: 'characterCharisma', options: { unique: false } },
      { name: 'characterHitPoints', keypath: 'characterHitPoints', options: { unique: false } },
      { name: 'characterArmorClass', keypath: 'characterArmorClass', options: { unique: false } },
      { name: 'characterSTMagicWand', keypath: 'characterSTMagicWand', options: { unique: false } },
      { name: 'characterSTPoison', keypath: 'characterSTPoison', options: { unique: false } },
      { name: 'characterSTParalysis', keypath: 'characterSTParalysis', options: { unique: false } },
      { name: 'characterSTDragonBreath', keypath: 'characterSTDragonBreath', options: { unique: false } },
      { name: 'characterSTSpells', keypath: 'characterSTSpells', options: { unique: false } },
      { name: 'characterEquipment', keypath: 'characterEquipment', options: { unique: false } }
    ]
  }]
};

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'character', component: CharacterSheetComponent },
  { path: 'campaign', component: CampaignComponent },
  { path: 'map', component: MapBuilderComponent },
  { path: 'character-display', component: CharacterDisplayComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

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
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  ObserversModule
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterSheetComponent,
    HeaderComponent,
    CampaignComponent,
    HomeComponent,
    MapBuilderComponent,
    CharacterDisplayComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule, 
    RouterModule.forRoot(routes),
    NgxIndexedDBModule.forRoot(dbConfig),
    ...modules,
  ],
    exports: [
      HeaderComponent,
      ...modules
    ],
  providers: [
    DiceService, 
    AbilityScoreAdjustmentService, 
    SavingThrowAndModifierService,
    DDService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' }},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
