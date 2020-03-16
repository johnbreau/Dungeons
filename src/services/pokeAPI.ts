import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PokeAPI {
  baseURL = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) {
}

 getPokemonByName(pokeNumber) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseURL + 'pokemon/' + pokeNumber);
  }
}
