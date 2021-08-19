import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMovement]'
})
export class MovementDirective {
  @Input('appMovement') public color!: string;


  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.changeColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.changeColor('red');
  }

  private changeColor(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
