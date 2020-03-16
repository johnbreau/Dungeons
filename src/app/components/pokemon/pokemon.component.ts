import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PokeService } from '../../services/pokeService.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemonForm: FormGroup;
  public myData: {};

  constructor( public pokeService: PokeService,
               public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.pokemonForm = this.formBuilder.group({
      pokemonName: [
        '',
        Validators.compose([Validators.required])
      ],
    });
  }

  getPokemon() {
    let pokemon: any;
    pokemon = {pokemonName: this.pokemonForm.get('pokemonName').value};
    this.pokeService.getPokemonByName(pokemon.pokemonName)
    .subscribe((res: Response) => {
      this.myData = res;
      console.log('data', this.myData);
    }, error => {
      console.log(error);
});
    }
  }

