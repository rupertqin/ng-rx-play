import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements AfterViewInit {
  constructor() {
    this.show = false;
  }
  show: boolean;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 2000)
  }

}
