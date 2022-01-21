import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-prism',
  templateUrl: './prism.component.html',
  styleUrls: ['./prism.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrismComponent implements AfterViewInit, OnChanges {
  @ViewChild('codeEle') codeEle!: ElementRef;
  @Input() code?: string;
  @Input() lineNumber?: boolean = false;
  @Input() language?: string;
  constructor() { }
  ngAfterViewInit() {
    Prism.highlightElement(this.codeEle.nativeElement);
  }
  ngOnChanges(changes: any): void {
    if (changes?.code) {
      if (this.codeEle?.nativeElement) {
        this.codeEle.nativeElement.textContent = this.code;
        Prism.highlightElement(this.codeEle.nativeElement);
      }
    }
  }
}
