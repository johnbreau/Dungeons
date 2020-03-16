import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PokeService {
  baseURL = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) {
}

 getPokemonByName(pokeNumber) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http.get(this.baseURL + 'pokemon/' + pokeNumber)
      .subscribe(data => console.log('data', data));
  }
}
