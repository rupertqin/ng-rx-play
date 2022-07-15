import { InjectionToken } from '@angular/core';
import { EnvService } from './environment.service';

export interface ModuleOptions {
	retryCount?: number;
	retryInterval?: number;
}

export const FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ModuleOptions>( "forRoot() MyService configuration." );

export const EnvServiceFactory = (config: any): EnvService => {

  console.log('EnvServiceFactory', config);
  debugger
  const env: any = new EnvService();

  // 读取 window 对象下的 __env 对象
  const browserWindow = (window as any) || {};
  const browserWindowEnv = browserWindow.environment || {};

  // 覆盖 service 中的默认值
  for (const key in env) {
    if (browserWindowEnv[key] !== null && browserWindowEnv[key] !== undefined) {
      env[key] = browserWindowEnv[key];
    }
  }

  return env;
};



export const EnvServiceProvider: any = {
  provide: EnvService,
  useFactory: EnvServiceFactory,
  deps: [FOR_ROOT_OPTIONS_TOKEN]
};
