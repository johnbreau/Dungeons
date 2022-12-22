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
  public myCharacters: any[];

  constructor(
    private formBuilder: FormBuilder,
    private dbService: NgxIndexedDBService) { }

    ngOnInit() {
      this.myCharacters = [];

      this.characterGetForm = this.formBuilder.group({
        name: [
          '',
          Validators.compose([Validators.required])
        ]
      })

    this.dbService.getAll('charactersDb').subscribe(results => {
      results.forEach((result,i)=>{
       console.log('rezzzult', result, 'myChar', this.myCharacters);
       this.myCharacters.push(result);
      });
   });
  }

  getCharacterfromDb() {
    let characterName = this.characterGetForm.get('name').value;
    this.dbService.getByKey('charactersDb', 1).subscribe((character) => {
      console.log('subscribe', character);
    });
  }
}
