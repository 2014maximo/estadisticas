import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class ClientesDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value;
    if (initialValue === '') return;

    let formattedValue = initialValue.replace(/\D/g, '');
    formattedValue = formattedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    this.el.nativeElement.value = formattedValue;
  }
}