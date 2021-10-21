import { Injectable } from '@angular/core';
import { Subject, Observable, Subscriber } from 'rxjs';

@Injectable()
export class MissionService {

  // Observable string sources
  private missionAnnouncedSource = new Subscriber<string>();
  private missionConfirmedSource = new Subscriber<string>();

  missionAnnounced$: Observable<string>;
  missionConfirmed$: Observable<string>;


  constructor() {
    // Observable string streams
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
