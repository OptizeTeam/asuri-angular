import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMarkAsError]'
})
export class MarkAsErrorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'red');
    renderer.setStyle(el.nativeElement, 'color', 'white');
    renderer.setStyle(el.nativeElement, 'fontWeight', 'bold');
  }
}
