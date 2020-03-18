import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DDService {
  baseURL = 'http://www.dnd5eapi.co/api/';
  constructor(private http: HttpClient) {
}

 getAbilityScore(index) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseURL + 'ability-scores/' + index);
  }

  getCharacterClass(index) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseURL + 'classes/' + index);
  }
}