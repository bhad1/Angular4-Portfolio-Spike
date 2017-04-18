import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  // declaration of variable to show the correct project. Defaults to 1 for the first project. But will change on clicks.
  projectNumber= 1;

  // function created to catch the $event,which is the outputted variable from jumbotron
  // that we wanted from the child, on the parameter in the selector to change the project.
  showProjectNumber(showProjectNumber){
    this.projectNumber = showProjectNumber;
    console.log('parent portfolio:' + showProjectNumber);
  }

  constructor() { }

  ngOnInit() {
  }

}
