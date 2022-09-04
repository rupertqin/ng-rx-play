import { Inject, Injectable } from '@angular/core';
import {FOR_ROOT_OPTIONS_TOKEN} from './mission.service.provider'

@Injectable()
export class MissionInfoService {
  config: any;

  constructor(@Inject(FOR_ROOT_OPTIONS_TOKEN) config: any) {
    debugger
    this.config = config;
  }
}
