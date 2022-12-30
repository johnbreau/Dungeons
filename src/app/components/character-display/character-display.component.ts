import { Component } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectableObservable, filter, Observable } from 'rxjs';
import { Character } from '../../character';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.scss']
})
export class CharacterDisplayComponent {

  public characterGetForm: FormGroup;
  dataSource = new MatTableDataSource<Character>();

  displayedColumns: string[] = [
    'characterName',
    'characterClass',
    'characterLevel',
    // 'characterSrength',
    // 'characterDexterity',
    // 'characterConstitution',
    // 'characterIntelligence',
    // 'characterWisdom',
    // 'characterCharisma',
    // 'characterHitPoints',
    // 'characterExperiencePoints',
    // 'characterArmorClass',
    // 'characterSTMagicWand',
    // 'characterSTPoison',
    // 'characterSTParalysis',
    // 'characterSTDragonBreath',
    // 'characterSTSpells',
    // 'characterEquipment'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private dbService: NgxIndexedDBService) { }

    ngAfterViewInit() {}

    ngOnInit() {
      this.characterGetForm = this.formBuilder.group({
        name: [
          '',
          Validators.compose([Validators.required])
        ]
      })

      this.getCharacters().subscribe(res => {
        this.dataSource.data = res;
      })
  }

  getCharacters(): Observable<Character[]> {
    return this.dbService.getAll<Character>('charactersDb');
  }

   selectCharacter(event) {
    console.log('clicked', event.currentTarget.firstChild.innerText);
    let localCharacter = event.currentTarget.firstChild.innerText;
    this.dataSource.data.forEach(character => {
      if (character.characterName === localCharacter){
        console.log(character);
      }
    });
   }
}
