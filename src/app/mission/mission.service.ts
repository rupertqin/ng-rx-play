import { Inject, Injectable } from '@angular/core';
import { Subject, Observable, Subscriber } from 'rxjs';
import {FOR_ROOT_OPTIONS_TOKEN} from './mission.service.provider'

@Injectable()
export class MissionService {

  // Observable string sources
  private missionAnnouncedSource: Subscriber<string>[] = [];
  private missionConfirmedSource = new Subscriber<string>();

  missionAnnounced$: Observable<string>;
  missionConfirmed$: Observable<string>;
  config: any;

  constructor(@Inject(FOR_ROOT_OPTIONS_TOKEN) config: any) {
    this.config = config;
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
