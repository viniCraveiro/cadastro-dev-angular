import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appInputGroup]',
  standalone: true
})
export class InputGroupDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const label = this.el.nativeElement.querySelector('label');
    const input = this.el.nativeElement.querySelector('input');

    if (label) {
      this.renderer.addClass(label, 'label-form');
      if (input.disabled) {
        this.renderer.addClass(label, 'label-form-disabled');
      }
    }

    if (input) {
      this.renderer.addClass(input, 'input-form');
      if (input.disabled) {
        this.renderer.addClass(input, 'input-form-disabled');
        // this.renderer.addClass(label, 'label-form-disabled');
      }
    }

    this.renderer.addClass(this.el.nativeElement, 'input-group');
  }
}
