import { Component, OnInit } from '@angular/core';
import { MissionService } from './mission.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
  providers: [MissionService]
})
export class MissionComponent implements OnInit {
  astronauts: {name: string, missionService: MissionService}[];
  history: string[] = [];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;

  constructor() {

    this.astronauts = ['Lovell', 'Swigert', 'Haise'].map(name => {
      const missionService = new MissionService()
      missionService.missionConfirmed$.subscribe(
        astronaut => {
          this.history.push(`${astronaut} confirmed the mission`);
        });
      return {
        name,
        missionService,
      }
    })
    


  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.astronauts.forEach(astronaut => {
      astronaut.missionService.announceMission(mission);
    })
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

  ngOnInit(): void {
  }

}
