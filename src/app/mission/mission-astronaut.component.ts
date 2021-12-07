import { Component, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { MissionService } from './mission.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mission-astronaut',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <p>
      {{astronaut}}: <strong>{{mission}}</strong>
      <button
        (click)="confirm()"
        [disabled]="!announced || confirmed">
        Confirm
      </button>
    </p>
  `
})
export class MissionAstronautComponent implements OnDestroy {
  @Input() astronaut = '';
  @Input() count = 3;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe( mission => {
      this.mission = mission;
      this.announced = true;
      this.confirmed = false;
    });

		
		// this.subscription = missionService.missionAnnounced$.subscribe({
		// 	next: mission => {
	  //     this.mission = mission;
	  //     this.announced = true;
	  //     this.confirmed = false;
		// 	}
    // });
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
