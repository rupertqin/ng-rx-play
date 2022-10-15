import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators'
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.scss']
})
export class RxComponent implements OnInit {
  ob = new Subject();
  count = 0;
  loading = false;

  constructor(private heroService: HeroService) {

  }
  add() {
    this.getData().subscribe((val) => {
      this.ob.next(val)
    });
  }

  getData() {
    const newob = new Subject();
    setTimeout(() => {
      newob.next({ data: this.count++ })
    }, 3000)
    return  newob
  }

  ngOnInit(): void {
    this.ob.pipe(
      tap(_ => this.loading = true),
      switchMap(() => this.getData())
    ).subscribe(val => {
      console.log(val)
      this.loading = false;
    })





  }

}
