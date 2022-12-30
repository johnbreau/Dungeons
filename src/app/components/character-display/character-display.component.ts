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

  public hideTable: boolean = false;
  public characterGetForm: FormGroup;
  public selectedCharacter = <Character>{};
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
    private dbService: NgxIndexedDBService,
    ) { }

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

  hideAllCharactersTable() {
    this.hideTable = true;
    console.log('closed');
  }

   selectCharacter(event) {
    let localCharacter = event.currentTarget.firstChild.innerText;
    this.dataSource.data.forEach(character => {
      if (character.characterName === localCharacter){
        this.selectedCharacter = character;
        this.hideAllCharactersTable(); 
      }
    });
   }
}
