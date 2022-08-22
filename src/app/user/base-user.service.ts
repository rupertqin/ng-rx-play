export class BaseUserService {
  count = 0;
  currTitle = 'ng-app';
  name = 'Hasikii';

  changeTitle() {
    console.log('count: ', ++this.count)
  }
}
