import { Component } from '@angular/core';
import { PokeService } from './services/pokeService.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dungeons';

  constructor(public pokeService: PokeService) {

  }

  ngOnInit() {
    this.pokeService.getPokemonByName(2);
  }
}
