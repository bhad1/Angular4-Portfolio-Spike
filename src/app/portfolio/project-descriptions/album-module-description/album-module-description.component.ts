import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-ps-album-module-description',
  templateUrl: './album-module-description.component.html',
  styleUrls: ['./album-module-description.component.scss']
})
export class AlbumModuleDescriptionComponent implements OnInit, OnChanges {
  @Input() showProjectNumber: number;
  showProject;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.showProjectNumber === 3) {
      this.showProject = true;
    } else {
      this.showProject = false;
    }

  }

}
