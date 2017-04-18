import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Image} from './image';

const IMAGES: Image[] = [
  {"name": "First", "url": "https://placekitten.com/g/1500/1000"},
  {"name": "Second", "url": "https://placekitten.com/g/3000/2000"},
  {"name": "Third", "url": "https://placekitten.com/g/1500/1000"},
  {"name": "Fourth", "url": "https://placekitten.com/g/6000/4000"}
];

@Component({
  selector: 'app-ps-carousel',
  templateUrl: 'angular-carousel.component.html',
  styleUrls: ['angular-carousel.component.scss']
})

export class AngularCarouselComponent implements OnInit, OnChanges {
  @Input() showProjectNumber: number;
  showProject;
  showImage = 0;

  nextImage(){
    if(this.showImage === this.images.length-1){
      this.showImage = 0;
    } else{
      this.showImage ++;
    }

  }

  prevImage(){
    if(this.showImage === 0){
      this.showImage = 3;
    }else {
      this.showImage --;
    }
  }

  fillCircleOne(){
    if(this.showImage === 0){
      return 'black';
    }
  }
  fillCircleTwo(){
    if(this.showImage === 1){
      return 'black';
    }
  }
  fillCircleThree(){
    if(this.showImage === 2){
      return 'black';
    }
  }
  fillCircleFour(){
    if(this.showImage === 3){
      return 'black';
    }
  }

  setImageIndicators(imgNum: number){
    this.showImage = imgNum;
  }



  public images = IMAGES;

  constructor() {

  }

  ngOnInit() {
    setInterval(() => {
      this.showImage ++;
      if(this.showImage === this.images.length){
        this.showImage = 0;
      }
    }, 5000);

  }

  ngOnChanges() {
    if(this.showProjectNumber === 2){
      this.showProject = true;
    }else {
      this.showProject = false;
    }

  }

}
