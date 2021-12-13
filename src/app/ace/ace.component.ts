import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import * as Ace from 'ace-builds';
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties"
import "ace-builds/src-noconflict/mode-typescript"


const code: string = `
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

@Component({
  selector: 'app-ace',
  templateUrl: './ace.component.html',
  styleUrls: [ './ace.component.scss' ]
})
export class AceComponent implements AfterViewInit {
  editorOptions = {
    theme: 'vs-dark', 
    language: 'javascript'
  };
  code: string = code;
  @ViewChild('myAce') myAce: ElementRef|null = null;

  ngAfterViewInit(): void {
    if (this.myAce) {
      const editor = Ace.edit(this.myAce.nativeElement, {
        theme: "ace/theme/tomorrow_night_eighties",
        mode: "ace/mode/typescript",
        maxLines: 30,
        wrap: true,
        autoScrollEditorIntoView: true
      });
      editor.session.setValue(code)
    }
  }

}
