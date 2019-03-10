import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appFillTemplate]'
})
export class FillTemplateDirective implements OnInit {

  @Input('name') name: string;
  @Input('surname') surname: string;

  constructor(private Element: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    alert(`Tak, naprawdę ${this.name} ${this.surname}`);
  }

  ngOnInit() {
    this.Element.nativeElement.innerText = `Nowy użytkownik nazywa się ${this.name} ${this.surname}`;
  }
}
