import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.innerText = 'My new text rocks, previous one was lame: ';
  }

}
