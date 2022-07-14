import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class HeroService {

  constructor() { }
  num = 0;

  getNum() {
    return ++this.num;
  }
}
