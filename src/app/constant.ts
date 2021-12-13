export const EXAMPLE_CODE: string = `
import { Injectable } from '@angular/core';
import { Subject, Observable, Subscriber } from 'rxjs';

@Injectable()
export class MissionService {

  // Observable string sources
  private missionAnnouncedSource: Subscriber<string>[] = [];
  private missionConfirmedSource = new Subscriber<string>();

  missionAnnounced$: Observable<string>;
  missionConfirmed$: Observable<string>;


  constructor() {
    // Observable string streams
    this.missionAnnounced$ = new Observable(subscriber => {
      this.missionAnnouncedSource.push(subscriber)
    })
    this.missionConfirmed$ = new Observable(subscriber => {
      this.missionConfirmedSource = subscriber
    })
  }

  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.forEach(ss => ss.next(mission));
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }
}
`;
