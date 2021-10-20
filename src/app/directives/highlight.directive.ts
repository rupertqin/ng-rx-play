import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.addEventListener('mouseenter', () => this.highlight(this.appHighlight))
    el.nativeElement.addEventListener('mouseleave', () => this.highlight(''))
  }

  @Input()
  appHighlight = ''

  // @HostListener('mouseenter')
  // onMouseEnter() {
  //   this.highlight('yellow');
  // }
  
  // @HostListener('mouseleave')
  // onMouseLeave() {
  //   this.highlight('');
  // }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
