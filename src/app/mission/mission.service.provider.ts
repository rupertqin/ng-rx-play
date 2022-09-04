import { Provider, InjectionToken } from '@angular/core';

import { MissionInfoService} from './mission-info.service';
export const FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<any>('forRoot() options');

export const MissionServiceFactory = (options = {}) => {
  const mission = new MissionInfoService(options);
  return mission;
};

export const MissionServiceProvider: Provider = {
  provide: MissionInfoService,
  useFactory: MissionServiceFactory,
  deps: [FOR_ROOT_OPTIONS_TOKEN]
};
