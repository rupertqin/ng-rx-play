import { Component, OnInit } from '@angular/core';
import { MissionService } from './mission.service';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
  providers: [MissionService]
})
export class MissionComponent implements OnInit {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;

  private subject$ = new Subject<void>();
  private unsubscribe$ = new Subject();
  private subscriptionList: Subscription[] = [];

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

  ngOnInit(): void {
    // this.subject$.pipe(takeUntil(this.subject$)).subscribe(() => console.log('收到数据啦'));
    // this.subject$.pipe(takeUntil(this.subject$)).subscribe(() => console.log('收到数据啦'));
    // this.subject$.pipe(takeUntil(this.subject$)).subscribe(() => console.log('收到数据啦'));
    this.subject$.subscribe(() => console.log('收到数据啦'));
    this.subject$.subscribe(() => console.log('收到数据啦'));
    this.subject$.subscribe(() => console.log('收到数据啦'));
    this.subject$.next();
    this.subject$.next();
  }

}
