import { Component, OnInit, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DiceService } from '../../services/dice.service';
import { DDService } from '../../services/dd.service';
import { Observable, of } from 'rxjs';

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
  public startingEquipment: {};
  public selectedCharacterClass: string;

  constructor(private formBuilder: FormBuilder,
              private dandDservice: DDService,
              private diceService: DiceService) { }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
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
      characterAlignment: '',
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

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit() {
    this.getAbilityScores(this.abilityScoreIndex);
  }

  getAbilityScores(index) {
    this.dandDservice.getAbilityScore(this.abilityScoreIndex)
    .subscribe((res: Response) => {
      this.abilityScoreData = res;
      // console.log('data', this.abilityScoreData$);
    }, error => {
      console.log(error);
    });
  }

  onCharacterSelect(val) {
    switch (this.selectedCharacterClass) {
      case 'barbarian': {
        console.log('barbarian selected');
        this.dandDservice.getCharacterClass('barbarian')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(1)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'bard': {
        console.log('bard selected');
        this.dandDservice.getCharacterClass('bard')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(2)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'cleric': {
        console.log('cleric selected');
        this.dandDservice.getCharacterClass('cleric')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(3)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'druid': {
        console.log('druid selected');
        this.dandDservice.getCharacterClass('druid')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(4)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'fighter': {
        console.log('fighter selected');
        this.dandDservice.getCharacterClass('fighter')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(5)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'monk': {
        console.log('monk selected');
        this.dandDservice.getCharacterClass('monk')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(6)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'paladin': {
        console.log('paladin selected');
        this.dandDservice.getCharacterClass('paladin')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(7)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'ranger': {
        console.log('ranger selected');
        this.dandDservice.getCharacterClass('ranger')
          .subscribe(data => this.characterClass = data);
        break;
      }
      case 'rogue': {
        console.log('rogue selected');
        this.dandDservice.getCharacterClass('rogue')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(8)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'sorcerer': {
        console.log('sorcerer selected');
        this.dandDservice.getCharacterClass('sorcerer')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(9)
          .subscribe(data => this.startingEquipment = data);
        break;
      }
      case 'warlock': {
        console.log('warlock selected');
        this.dandDservice.getCharacterClass('warlock')
          .subscribe(data => this.characterClass = data);
        this.dandDservice.getStartingEquipment(10)
          .subscribe(data => this.startingEquipment = data);
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

  addCharacter() {
    let newCharacter;
    newCharacter = {characterName: this.characterSheetForm.get('characterName').value,
      characterClass : this.characterSheetForm.get('characterClass').value,
      characterSrength : this.characterSheetForm.get('characterSrength').value,
      characterDexterity : this.characterSheetForm.get('characterDexterity').value,
      characterConstitution : this.characterSheetForm.get('characterConstitution').value,
      characterIntelligence: this.characterSheetForm.get('characterIntelligence').value,
      characterWisdom: this.characterSheetForm.get('characterWisdom').value,
      characterCharisma: this.characterSheetForm.get('characterCharisma').value,
      characterHitPoints: this.characterSheetForm.get('characterHitPoints').value,
      characterExperiencePoints: this.characterSheetForm.get('characterExperiencePoints').value,
      characterGold: this.characterSheetForm.get('characterHitGold').value,
      characterArmorClass: this.characterSheetForm.get('characterArmorClass').value,
      characterAlignment: this.characterSheetForm.get('characterAlignment').value,
      characterLevel: this.characterSheetForm.get('characterLevel').value,
      characterSTPoison: this.characterSheetForm.get('characterSTPoison').value,
      characterSTMagicWand: this.characterSheetForm.get('characterSTMagicWand').value,
      characterSTParalysis: this.characterSheetForm.get('characterSTParalysis').value,
      characterSTDragonBreath: this.characterSheetForm.get('characterSTDragonBreath').value,
      characterSTSpells: this.characterSheetForm.get('characterSTSpells').value,
      characterEquipment: this.characterSheetForm.get('characterEquipment').value,
    };
    this.dandDservice.getCharacterClass(newCharacter.characterClass)
    .subscribe((res: Response) => {
      this.characterClass = res;
      console.log('data', this.characterClass);
    }, error => {
      console.log(error);
    });
  }

  experienceLevelUp() {
    const level = this.characterSheetForm.get('characterClass').value;
    if (level === undefined || level === null || level === '') {
      window.alert('please select a character class');
    }
    if (level === 'Magic-user') {
        const newPoints = this.diceService.sixSidedDieFunc();
        console.log(newPoints);
    }
    if (level ===  'Cleric' ||
        level === 'Thief' ||
        level === 'Elf') {
      const newPoints = this.diceService.eightSidedDieFunc();
      console.log(newPoints);
    }
    if (level  === 'Halfling') {
      const newPoints = (this.diceService.eightSidedDieFunc() + 1);
      console.log(newPoints);
    }
    if (level  === 'Dwarf') {
      const newPoints = (this.diceService.eightSidedDieFunc() + 2);
      console.log(newPoints);
    }
    if (level === 'Fighter') {
      const newPoints = (this.diceService.tenSidedDieFunc());
      console.log(newPoints);
    }
  }

  testDice() {
    console.log('eight', this.diceService.eightSidedDieFunc());
  }
}
