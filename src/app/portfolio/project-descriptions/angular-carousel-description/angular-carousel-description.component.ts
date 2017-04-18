import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ps-angular-carousel-description',
  templateUrl: './angular-carousel-description.component.html',
  styleUrls: ['./angular-carousel-description.component.scss']
})
export class AngularCarouselDescriptionComponent implements OnInit, OnChanges {
  @Input() showProjectNumber: number;
  showProject;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.showProjectNumber === 2){
      this.showProject = true;
    } else{
      this.showProject = false;
    }
  }

}
