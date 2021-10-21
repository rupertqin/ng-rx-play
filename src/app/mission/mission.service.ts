import { Injectable } from '@angular/core';
import { Subject, Observable, Subscriber } from 'rxjs';

let count = 0;

@Injectable()
export class MissionService {

  private missionAnnouncedSource: Subscriber<string>;
  private missionConfirmedSource: Subscriber<string>;

  missionAnnounced$: Observable<string>;
  missionConfirmed$: Observable<string>;
  count = 0;


  constructor() {
    this.count = count++;
    this.missionAnnouncedSource = new Subscriber();
    this.missionConfirmedSource = new Subscriber();

    this.missionAnnounced$ = new Observable(subscriber => {
      this.missionAnnouncedSource = subscriber
    })
    this.missionConfirmed$ = new Observable(subscriber => {
      this.missionConfirmedSource = subscriber
    })
  }

  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }
}
