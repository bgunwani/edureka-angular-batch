import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[highlightText]'
})

export class HighlightDirective {

    constructor(private elementRef: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.elementRef.nativeElement.style.backgroundColor = 'pink';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.elementRef.nativeElement.style.backgroundColor = '';
    }

}