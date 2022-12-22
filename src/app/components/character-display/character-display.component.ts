import { Component } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { Character } from '../../character';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.scss']
})
export class CharacterDisplayComponent {

  public characterGetForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dbService: NgxIndexedDBService) { }

    ngOnInit() {
      let openRequest = indexedDB.open('charactersDb');

      openRequest.onsuccess = function() {
        let db = openRequest.result;
        console.log('db', db);
        // continue working with database using db object
      };

      this.characterGetForm = this.formBuilder.group({
        name: [
          '',
          Validators.compose([Validators.required])
        ]
      })

      this.dbService.getAll('charactersDb').subscribe(
        characters => {
            console.log('characterDB Object Store:', characters);
        },
        error => {
            console.log(error);
        }
    );
  }

  getCharacterfromDb() {
    let characterName = this.characterGetForm.get('name').value;
    this.dbService.getByKey('charactersDb', 1).subscribe((character) => {
      console.log('subscribe', character);
    });
  }
}
