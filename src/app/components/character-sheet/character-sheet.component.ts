import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DiceService } from '../../services/dice.service';
import { DDService } from '../../services/dd.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {
  public characterSheetForm: FormGroup;
  public bodyText: string;
  public abilityScoreIndex = 'str';
  public abilityScoreData: {};
  public characterClass: {};

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

    this.characterSheetForm.patchValue({characterSrength: this.diceService.SixSidedThreeRolls()});
    this.characterSheetForm.patchValue({characterDexterity: this.diceService.SixSidedThreeRolls()});
    this.characterSheetForm.patchValue({characterConstitution: this.diceService.SixSidedThreeRolls()});
    this.characterSheetForm.patchValue({characterIntelligence: this.diceService.SixSidedThreeRolls()});
    this.characterSheetForm.patchValue({characterWisdom: this.diceService.SixSidedThreeRolls()});
    this.characterSheetForm.patchValue({characterCharisma: this.diceService.SixSidedThreeRolls()});
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
