import {Component, Input, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-ps-product-listing-description',
  templateUrl: './product-listing-description.component.html',
  styleUrls: ['./product-listing-description.component.scss']
})
export class ProductListingDescriptionComponent implements OnInit, OnChanges {
  @Input() showProjectNumber: number;
  showProject;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.showProjectNumber === 1){
      this.showProject = true;
    } else{
      this.showProject = false;
    }
  }

}
