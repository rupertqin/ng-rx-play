import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
// import the new component
import { MissionComponent } from './mission.component';
import { MissionAstronautComponent } from './mission-astronaut.component';
import { MissionService } from './mission.service';
import { InfoService } from '../user/info.service'
import { MissionServiceProvider, FOR_ROOT_OPTIONS_TOKEN } from './mission.service.provider'


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
export class MissionModule {
  static forChild(options: Record<string, any>): ModuleWithProviders<MissionModule> {
    return {
      ngModule: MissionModule,
      providers: [MissionServiceProvider, { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options }]
    };
  }
}
