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
      this.characterGetForm = this.formBuilder.group({
        name: [
          '',
          Validators.compose([Validators.required])
        ]
      })
  }

  getCharacterfromDb() {
    let characterName = this.characterGetForm.get('name').value;
    this.dbService.getByKey('characters', 1).subscribe((character) => {
      console.log('subscribe', character);
    });
  }
}
