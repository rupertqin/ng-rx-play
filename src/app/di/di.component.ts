import { Component, OnInit } from '@angular/core';

import { HeroService } from '../heroes/hero.service';
import { EnvService } from './environment/environment.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss']
})
export class DiComponent implements OnInit {

  constructor(private heroService: HeroService, private envService: EnvService) { }

  add() {
    console.log(this.heroService.getNum());
  }

  ngOnInit(): void {
    console.log(this.envService);
  }

}
