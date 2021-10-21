import {  ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const ref = new ElementRef();
    const directive = new HighlightDirective(ref);
    expect(directive).toBeTruthy();
  });
});
