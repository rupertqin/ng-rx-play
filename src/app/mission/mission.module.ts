import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import the new component
import { MissionComponent } from './mission.component';
import { AstronautComponent } from './astronaut.component';
import { MissionService } from './mission.service';
import { UserService } from '../user/user.service'

@NgModule({
	providers: [
		MissionService,
		// UserService
	],
  imports: [
    CommonModule
  ],
  declarations: [
    MissionComponent,
		AstronautComponent
  ],
  exports: [
    MissionComponent,
		// AstronautComponent
  ]
})
export class MissionModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/