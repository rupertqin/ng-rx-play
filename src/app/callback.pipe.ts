import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'callback',
})
export class CallbackPipe implements PipeTransform {
  transform<T>(obj: T, callback: (p: T) => any): any {
		console.log('callback')
    if (!obj || !callback) {
      return obj;
    }
    return callback(obj);
  }
}
