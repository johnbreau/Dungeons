import { Component, OnInit, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DiceService } from '../../services/dice.service';
import { DDService } from '../../services/dd.service';
import { SavingThrowAndModifierService } from 'src/app/services/savingThrowService.service';
import { Observable, of } from 'rxjs';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router'
import { Character } from '../../character';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {
  @Output() select: EventEmitter<any>;

  public characterSheetForm: FormGroup;
  public bodyText: string;
  public abilityScoreIndex = 'str';
  public abilityScoreData: {};
  public characterClass: {};
  public characterAlignment: {};
  public startingEquipment: {};
  public selectedCharacterClass: string;
  public selectedCharacterAlignment: string;
  public characterArmorClass: string;
  
  constructor(private formBuilder: FormBuilder,
              private dandDservice: DDService,
              private diceService: DiceService,
              private router: Router,
              private dbService: NgxIndexedDBService,
              private savingThrowAndModifierService: SavingThrowAndModifierService) { }

  ngOnInit() {
    let appContainer = document.querySelector('.app-container') as HTMLElement | null;
    let parchmentContainer = document.querySelector('.parchment') as HTMLElement | null;
    if (appContainer !== null && parchmentContainer !== null) {
      let matchHeight = appContainer.offsetHeight.toString();
      parchmentContainer.style.height = matchHeight + 'px';
    }
    let today = new Date();
    const current = today.getTime();
    today.setHours(25)
    const token = {
      jwt: 'dddddd',
      expireDate: today.getTime()
    }

    localStorage.setItem('token', JSON.stringify(token));

    this.characterSheetForm = this.formBuilder.group({
      characterName: [
        '',
        Validators.compose([Validators.required])
      ],
      characterClass: [
        '',
        Validators.compose([Validators.required])
      ],
      characterSrength: '',
      characterDexterity: '',
      characterConstitution: '',
      characterIntelligence: '',
      characterWisdom: '',
      characterCharisma: '',
      characterHitPoints: '',
      characterExperiencePoints: '',
      characterGold: '',
      characterArmorClass: '',
      characterAlignment: [
        '',
        Validators.compose([Validators.required])
      ],
      characterLevel: '',
      characterSTPoison: '',
      characterSTMagicWand: '',
      characterSTParalysis: '',
      characterSTDragonBreath: '',
      characterSTSpells: '',
      characterEquipment: '',
      disabled: [false]
    });
  }

  onCharacterSelect(val) {
    switch (this.selectedCharacterClass) {
      case 'barbarian': {
        this.dandDservice.getCharacterClass('barbarian')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(1)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'bard': {
        this.dandDservice.getCharacterClass('bard')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(2)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'cleric': {
        this.dandDservice.getCharacterClass('cleric')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(3)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'druid': {
        this.dandDservice.getCharacterClass('druid')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(4)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'fighter': {
        this.dandDservice.getCharacterClass('fighter')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(5)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'monk': {
        this.dandDservice.getCharacterClass('monk')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(6)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'paladin': {
        this.dandDservice.getCharacterClass('paladin')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(7)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'ranger': {
        this.dandDservice.getCharacterClass('ranger')
          .subscribe(data => this.characterClass = data);
        break;
      }
      case 'rogue': {
        this.dandDservice.getCharacterClass('rogue')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(8)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'sorcerer': {
        this.dandDservice.getCharacterClass('sorcerer')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(9)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'warlock': {
        this.dandDservice.getCharacterClass('warlock')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(10)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'wizard': {
        this.dandDservice.getCharacterClass('wizard')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(10)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
    }
  }

  onSelectedCharacterAlignment(val) {
    switch (this.selectedCharacterAlignment) {
      case 'Lawful': {
        this.dandDservice.getCharacterAlignment('Lawful')
          .subscribe(data => this.characterAlignment = data);
        break;
      }
      case 'Neutral': {
        this.dandDservice.getCharacterAlignment('Neutral')
          .subscribe(data => this.characterAlignment = data);
        break;
      }
      case 'Chaotic': {
        this.dandDservice.getCharacterAlignment('Chaotic')
          .subscribe(data => this.characterAlignment = data);
        break;
      }
    }
  }

  strengthRoll() {
    this.characterSheetForm.patchValue({characterSrength: this.diceService.SixSidedThreeRolls()});
  }

  dexterityRoll() {
    this.characterSheetForm.patchValue({characterDexterity: this.diceService.SixSidedThreeRolls()});
  }

  constitutionRoll() {
    this.characterSheetForm.patchValue({characterConstitution: this.diceService.SixSidedThreeRolls()});
  }

  intelligenceRoll() {
    this.characterSheetForm.patchValue({characterIntelligence: this.diceService.SixSidedThreeRolls()});
  }

  wisdomRoll() {
    this.characterSheetForm.patchValue({characterWisdom: this.diceService.SixSidedThreeRolls()});
  }

  charismaRoll()  {
    this.characterSheetForm.patchValue({characterCharisma: this.diceService.SixSidedThreeRolls()});
  }

  hitPointsRoll()  {
    if (this.characterSheetForm.get('characterClass').value !== null) {
      let charClass = this.characterSheetForm.get('characterClass').value;
      if (charClass === 'sorcerer' || charClass === 'wizard') {
        this.characterSheetForm.patchValue({characterHitPoints: this.diceService.sixSidedDieFunc() + this.savingThrowAndModifierService.barbarianSavingThrowAdjustments.constitution});
      } else if (charClass === 'fighter' || charClass === 'paladin' || charClass === 'ranger') {
        this.characterSheetForm.patchValue({characterHitPoints: this.diceService.tenSidedDieFunc() + this.savingThrowAndModifierService.barbarianSavingThrowAdjustments.constitution});
      } else if (charClass === 'barbarian') {
        this.characterSheetForm.patchValue({characterHitPoints: this.diceService.twelveSidedDieFunc() + this.savingThrowAndModifierService.barbarianSavingThrowAdjustments.constitution});
      } else {
        this.characterSheetForm.patchValue({characterHitPoints: this.diceService.eightSidedDieFunc() + this.savingThrowAndModifierService.barbarianSavingThrowAdjustments.constitution});
      }
    }
  }

  calculateArmorClass() {
    if (this.characterSheetForm.get('characterClass').value !== null) {
      let AcCharacterClass = this.characterSheetForm.get('characterClass').value;
      if (AcCharacterClass === 'barbarian') {
        let barbarianAC = 10 + this.savingThrowAndModifierService.barbarianSavingThrowAdjustments.constitution;
        this.characterSheetForm.patchValue({characterArmorClass: barbarianAC});
      }
      else if (AcCharacterClass === 'monk') {
        let characterObject = this.savingThrowAndModifierService.monkSavingThrowAdjustments;
        let monkAC = 10 + characterObject.constitution + characterObject.wisdom;
        this.characterSheetForm.patchValue({characterArmorClass: monkAC});
      } else {
        this.characterSheetForm.patchValue({characterArmorClass: 10});
      }
    } else {
    console.log('please choose a character class');
  }
}

  getCharacters(): Observable<Character[]> {
    return this.dbService.getAll<Character>('charactersDb');
  }

  skipCharacterEntry() {
    this.getCharacters().subscribe(res => {
      if (res.length > 0) {
          this.router.navigate(['/', 'character-display']);
      }
    })
  }

  addCharacterToDB() {
    this.dbService.add('charactersDb', { 
      characterName: this.characterSheetForm.get('characterName').value,
      characterClass: this.characterSheetForm.get('characterClass').value,
      characterLevel: this.characterSheetForm.get('characterLevel').value,
      characterSrength : this.characterSheetForm.get('characterSrength').value,
      characterDexterity : this.characterSheetForm.get('characterDexterity').value,
      characterConstitution : this.characterSheetForm.get('characterConstitution').value,
      characterIntelligence: this.characterSheetForm.get('characterIntelligence').value,
      characterWisdom: this.characterSheetForm.get('characterWisdom').value,
      characterCharisma: this.characterSheetForm.get('characterCharisma').value,
      characterHitPoints: this.characterSheetForm.get('characterHitPoints').value,
      characterExperiencePoints: this.characterSheetForm.get('characterExperiencePoints').value,
      characterArmorClass: this.characterSheetForm.get('characterArmorClass').value,
      characterSTMagicWand: this.characterSheetForm.get('characterSTMagicWand').value,
      characterSTPoison: this.characterSheetForm.get('characterSTPoison').value,
      characterSTParalysis: this.characterSheetForm.get('characterSTParalysis').value,
      characterSTDragonBreath: this.characterSheetForm.get('characterSTDragonBreath').value,
      characterSTSpells: this.characterSheetForm.get('characterSTSpells').value,
      characterEquipment: this.characterSheetForm.get('characterEquipment').value,
    }).subscribe(
      () => {
          // Do something after the value was added
      },
      error => {
          console.log(error);
      }
  );
  this.router.navigate(['/', 'character-display']);
  }
}
