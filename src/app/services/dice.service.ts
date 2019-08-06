import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

  fourSidedDieFunc() {
    const fourSidedNum =  Math.floor(Math.random() * 4) + 1;
    console.log('four sided', fourSidedNum);
    return fourSidedNum;
  }

  sixSidedDieFunc() {
      const sixSidedDie =  Math.floor(Math.random() * 6) + 1;
      console.log('six sided', sixSidedDie);
      return sixSidedDie;
  }

  eightSidedDieFunc() {
      const eightSidedDie =  Math.floor(Math.random() * 8) + 1;
      console.log('eight sided', eightSidedDie);
      return eightSidedDie;
  }

  tenSidedDieFunc() {
      const tenSidedDie =  Math.floor(Math.random() * 10) + 1;
      console.log('ten sided', tenSidedDie);
      return tenSidedDie;
  }

  twelveSidedDieFunc() {
      const twelveSidedDie =  Math.floor(Math.random() * 12) + 1;
      console.log('twelve sided', twelveSidedDie);
      return twelveSidedDie;
  }

  twentySidedDieFunc() {
      const twentySidedDie =  Math.floor(Math.random() * 20) + 1;
      console.log('twenty sided', twentySidedDie);
      return twentySidedDie;
  }
}
