import { Directive, OnChanges, Input, ElementRef } from '@angular/core';
import screenfull from 'screenfull';

@Directive({
    selector: '[toggleFullscreen]'
})
export class ToggleFullscreenDirective implements OnChanges {

    @Input('toggleFullscreen')
    isFullscreen!: boolean;

    constructor(private el: ElementRef) { }

    ngOnChanges() {
        if (this.isFullscreen && screenfull.isEnabled) {
            screenfull.request(this.el.nativeElement);
        } else if (screenfull.isEnabled) {
            screenfull.exit();
        }
    }

}
