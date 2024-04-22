import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent {
@ViewChild('ImgConatainer') ImageContainer:HTMLDivElement | undefined;

  currentZoomSize:number = 1;
  imageArray:string[] = [];
  zoomValue:string = "scale(1)";
  zoomStepSizeOnScroll = 0.05;
  zoomStepSizeonClick = 0.5;
  currentRotatedDeg:number = 0;
  rotateDeg = 90;
  rotateVal:string = "0deg";
  currentIndex:number = 0;

  private get totalImageCount(){
    return this.imageArray.length;
  }
  
  get isZoomOutEnabled(){
    return !!(this.currentZoomSize === 0.5);
  }
  
  setStyle(){

  }

  onPreviousButtonClick(){
    this.currentIndex = this.currentIndex <= 0 ?  0 : this.currentIndex -=1;
  }

  onNextButtonClick(){
    this.currentIndex = this.currentIndex >= (this.totalImageCount - 1) ?  this.totalImageCount - 1 : this.currentIndex +=1;
  }

  zoomOnScroll(event:WheelEvent){
    if(this.currentZoomSize >= 0.2){
    if(event.deltaY == -120){
      this.currentZoomSize += this.zoomStepSizeOnScroll; 
    }else{
      this.currentZoomSize -= this.zoomStepSizeOnScroll; 
    }
      this.zoomValue = `scale(${this.currentZoomSize})`
      return
    }
    this.currentZoomSize = 0.2;    
  }

  zoomOnClick(inOrOut:string){
    console.log(this.currentZoomSize);
    
    if(this.currentZoomSize >= 0.5){
    if(inOrOut == 'in'){
      this.currentZoomSize += this.zoomStepSizeonClick; 
    }else{
      this.currentZoomSize -= this.zoomStepSizeonClick; 
    }
      this.zoomValue = `scale(${this.currentZoomSize})`
      return
    }
    this.currentZoomSize = 0.5;
  }

  rotateImage(direction: string){
    if(direction == "c"){
      this.currentRotatedDeg += this.rotateDeg
    }else{
      this.currentRotatedDeg -= this.rotateDeg
    }
    this.rotateVal = `${this.currentRotatedDeg}deg`
  }

  resetValues(){
    this.rotateVal = "0deg";
    this.zoomValue = "scale(1)";
    this.currentRotatedDeg = 0;
    this.currentZoomSize = 1;

  }
}
