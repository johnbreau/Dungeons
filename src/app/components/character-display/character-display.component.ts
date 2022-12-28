import { Component } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { filter, Observable } from 'rxjs';
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
    'characterSrength',
    'characterDexterity',
    'characterConstitution',
    'characterIntelligence',
    'characterWisdom',
    'characterCharisma',
    'characterHitPoints',
    'characterExperiencePoints',
    'characterArmorClass',
    'characterSTMagicWand',
    'characterSTPoison',
    'characterSTParalysis',
    'characterSTDragonBreath',
    'characterSTSpells',
    'characterEquipment'
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

  //   this.dbService.getAll('charactersDb').subscribe(results => {
  //     results.forEach((result,i)=>{
  //      console.log('rezzzult', result, 'myChar', this.myCharacters);
  //      this.myCharacters.push(result);
  //     });
  //  });
  //   this.dataSource = new MatTableDataSource(this.myCharacters);
  //   console.log('ds', this.dataSource.filteredData);
  }

  getCharacters(): Observable<Character[]> {
    return this.dbService.getAll<Character>('charactersDb');
  }

  getCharacterfromDb() {
    let characterName = this.characterGetForm.get('name').value;
    this.dbService.getByKey('charactersDb', 1).subscribe((character) => {
      console.log('subscribe', character);
    });
  }
}
