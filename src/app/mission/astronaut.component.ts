import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

import { MissionService } from './mission.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-astronaut',
  template: `
    <p>
      {{astronaut.name}}: <strong>{{mission}}</strong>
      <button
        (click)="confirm()"
        [disabled]="!announced || confirmed">
        Confirm
      </button>
    </p>
  `
})
export class AstronautComponent implements OnDestroy, OnChanges {
  @Input() astronaut: { name: string, missionService: MissionService } = { name: '', missionService: new MissionService() }; 
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription|null = null;

  constructor() {
  }

  confirm() {
    this.confirmed = true;
    this.astronaut.missionService.confirmMission(this.astronaut.name);
  }

	ngOnChanges(changes: SimpleChanges) {
    this.subscription = changes.astronaut.currentValue.missionService.missionAnnounced$.subscribe(
      (mission: any) => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
    });

	}

  ngOnDestroy() {
    // prevent memory leak when component destroyed
		if (this.subscription) {
	    this.subscription.unsubscribe();
		}
  }
}