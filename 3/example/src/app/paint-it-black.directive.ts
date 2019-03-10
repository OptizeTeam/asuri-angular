import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appPaintItBlack]'
})
export class PaintItBlackDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(element.nativeElement, 'backgroundColor', 'black');
    renderer.setStyle(element.nativeElement, 'color', 'white');
  }
}
