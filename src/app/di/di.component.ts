import { Component, OnInit } from '@angular/core';

import { HeroService } from '../heroes/hero.service';
import { EnvService } from './environment/environment.service';
import {MissionInfoService} from '../mission/mission-info.service'

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss']
})
export class DiComponent implements OnInit {

  constructor(private heroService: HeroService, private envService: EnvService, private missionInfoService: MissionInfoService) { }

  add() {
    console.log(this.heroService.getNum());
    console.log(this.missionInfoService.config);
  }

  ngOnInit(): void {
    console.log(this.envService);
  }

}
