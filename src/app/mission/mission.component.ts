import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MissionService } from './mission.service';
import { AstronautComponent } from './astronaut.component'

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

  @ViewChildren(AstronautComponent)
  private atcomp!: QueryList<AstronautComponent>;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.atcomp.forEach(c => c.setMission(mission))
    // this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

  ngOnInit(): void {
  }

}
