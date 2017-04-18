import {Component, OnChanges, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ps-album-module',
  templateUrl: './album-module.component.html',
  styleUrls: ['./album-module.component.scss']
})
export class AlbumModuleComponent implements OnInit, OnChanges {
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
