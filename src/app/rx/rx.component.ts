import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.scss']
})
export class RxComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  add() {
    console.log(this.heroService.getNum());
  }

  ngOnInit(): void {
    let sub;
    // setTimeout(() =>{
    //   debugger
    // }, 0);

    // new Promise((resove) => {
    //   debugger
    //   resove(1);
    // }).then(data => {
    //   debugger
    // })

    const observable = new Observable(subscriber => {
      sub = subscriber;
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });


    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });

    observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');
    // new Promise((resove) => {
    //   debugger
    //   setTimeout(() =>{
    //     resove(1);
    //     debugger
    //   }, 0);
    // }).then(data => {
    //   debugger
    // })

    // const p = new Promise((resove) => {
    //   debugger
    //   resove('success')
    // })

    // p.then(data => {
    //   debugger
    // }).then(data => {
    //   debugger
    // })
    // p.then(data => {
    //   debugger
    // })

    // const e = new EventEmitter();
    // e.subscribe(data => {
    //   debugger
    // });
    // e.subscribe()
    // e.subscribe(data => {
    //   debugger
    // });
    // e.emit('success');


    document.addEventListener('click', () => console.log('Clicked!'));
    document.addEventListener('click', () => console.log('Clicked!'));




    // setTimeout(() =>{
    //   debugger
    // }, 0);

  }

}
