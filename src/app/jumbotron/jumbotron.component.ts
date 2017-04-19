import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ps-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  // first creation of output variable to determine which project to show
  @Output() showProjectNumber = new EventEmitter<number>();

  //Primary color variable that will be passed to css to change entire project primary color
  //Two-way data bound to the <input type=color> 
  primaryColor= "#4CAF50";

  // this function is made so that (click) on each link can have a function to use to change the variable
  // and instead of storing it here just emit it out to the parent element
  // the parent element will catch it with (showProjectNumber)= "showProjectNumber($event)" as a parameter on the selector of this element
  changeProject(showProjectNumber: number){
    this.showProjectNumber.emit(showProjectNumber);
  }

  constructor() {

  }

  ngOnInit() {
    console.log(this.primaryColor);
  }

  ngOnChanges() {
    console.log(this.primaryColor);
  }

}
