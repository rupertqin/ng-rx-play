import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import the new component
import { MissionComponent } from './mission.component';
import { MissionAstronautComponent } from './mission-astronaut.component';
import { MissionService } from './mission.service';
import { InfoService } from '../user/info.service'

@NgModule({
	providers: [
		MissionService,
		InfoService
	],
  imports: [
    CommonModule
  ],
  declarations: [
    MissionComponent,
		MissionAstronautComponent
  ],
  exports: [
    MissionComponent,
		MissionAstronautComponent
  ]
})
export class MissionModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
