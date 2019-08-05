import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {
  public characterSheet: FormGroup;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.characterSheet = this.formBuilder.group({
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
      characterArmorClass: '',
      characterAlignment: '',
      characterLevel: '',
      characterSTPoison: '',
      characterSTMagicWand: '',
      characterSTParalysis: '',
      characterSTDragonBreath: '',
      characterSTSpells: '',
      characterEquipment: '',
    });
  }

  addSet() {
    let newCharacter;
    newCharacter = {characterName: this.characterSheet.get('characterName').value,
            characterClass : this.characterSheet.get('characterClass').value,
            characterSrength : this.characterSheet.get('characterSrength').value,
            characterDexterity : this.characterSheet.get('characterDexterity').value,
            characterConstitution : this.characterSheet.get('characterConstitution').value,
            characterIntelligence: this.characterSheet.get('characterIntelligence').value,
            characterWisdom: this.characterSheet.get('characterWisdom').value,
            characterCharisma: this.characterSheet.get('characterCharisma').value,
            characterHitPoints: this.characterSheet.get('characterHitPoints').value,
            characterArmorClass: this.characterSheet.get('characterArmorClass').value,
            characterAlignment: this.characterSheet.get('characterAlignment').value,
            characterLevel: this.characterSheet.get('characterLevel').value,
            characterSTPoison: this.characterSheet.get('characterSTPoison').value,
            characterSTMagicWand: this.characterSheet.get('characterSTMagicWand').value,
            characterSTParalysis: this.characterSheet.get('characterSTParalysis').value,
            characterSTDragonBreath: this.characterSheet.get('characterSTDragonBreath').value,
            characterSTSpells: this.characterSheet.get('characterSTSpells').value,
            characterEquipment: this.characterSheet.get('characterEquipment').value,
    }
    this.dbGateway.addToCollection(newCharacter)
      .subscribe(set => {
        this.displayFormSuccess = true;
        this.setForm.reset();
      })
  }

}
