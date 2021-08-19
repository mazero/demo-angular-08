import { Directive, ElementRef, HostListener } from '@angular/core';

const toggleClass: string = 'toggle';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  private elementSelected: boolean = false;

  constructor(private el: ElementRef) { }

  @HostListener('click') 
  private onClick(): void {
    this.elementSelected = !this.elementSelected;
    if(this.elementSelected) {
      this.el.nativeElement.classList.add(toggleClass);
    } else {
      this.el.nativeElement.classList.remove(toggleClass);
    } 
  }

  }
