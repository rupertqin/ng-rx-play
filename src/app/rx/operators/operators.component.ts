import { Component, OnInit } from '@angular/core';
import { of,  } from 'rxjs'
import { switchMap, map } from 'rxjs/operators'

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const switched = of(1, 2, 3).pipe(map(x => of(x, x ** 2, x ** 3)));
    switched.subscribe(x => {
      x.subscribe(y => {
        console.log(y)

      })
    });

  }

}
