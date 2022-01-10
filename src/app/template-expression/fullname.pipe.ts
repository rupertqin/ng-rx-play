import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(name: string, familyName: string): unknown {
    console.log('FullnamePipe')
    return `${name} ${familyName}`
  }

}
