import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvServiceProvider, FOR_ROOT_OPTIONS_TOKEN } from './environment.provider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EnvironmentModule {
  static forRoot(config: Record<string, string | boolean>): ModuleWithProviders<EnvironmentModule> {
    debugger
    return {
      ngModule: EnvironmentModule,
      providers: [EnvServiceProvider, { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: config }]
    };
  }
}
