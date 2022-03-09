import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCardBorder]'
})
export class CardBorderDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('white');
  }
  private setBorder(color: string) {
    const border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }

}
