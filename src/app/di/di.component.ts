import { Component, OnInit } from '@angular/core';

import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss']
})
export class DiComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  add() {
    console.log(this.heroService.getNum());
  }

  ngOnInit(): void {
  }

}
