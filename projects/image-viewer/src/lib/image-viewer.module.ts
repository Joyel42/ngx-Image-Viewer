import { NgModule } from '@angular/core';
import { ImageViewerComponent } from './image-viewer.component';
import { ToggleFullscreenDirective } from './fullscreen.directive';



@NgModule({
  declarations: [
    ImageViewerComponent,
    ToggleFullscreenDirective
  ],
  imports: [
  ],
  exports: [
    ImageViewerComponent,
    ToggleFullscreenDirective
  ]
})
export class ImageViewerModule { }
