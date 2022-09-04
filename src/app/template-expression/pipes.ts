import { Pipe, PipeTransform } from '@angular/core';
import * as _utils from './utils';

type a = typeof _utils
type UtilsNames = keyof a;
const utils = _utils as Record<UtilsNames, Function>;


@Pipe({
  name: 'utils',
})
export class BasePipe implements PipeTransform {
  transform = function(firstArg: any, name: UtilsNames, ...elseArgs: any[]){
    return utils[name].apply({}, [firstArg, ...elseArgs])
  };
}
