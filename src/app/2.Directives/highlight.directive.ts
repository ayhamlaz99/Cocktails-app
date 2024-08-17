import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private elmR: ElementRef, private ren: Renderer2) {}
  
  @HostListener ('mouseenter') onmouseenter() {
    this.ren.addClass(this.elmR.nativeElement, 'highlight');
  }
  @HostListener ('mouseleave') onmouseleave() {
    this.ren.removeClass(this.elmR.nativeElement, 'highlight');
  }
}
