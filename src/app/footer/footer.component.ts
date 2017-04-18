import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ps-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  scrollTop(){
    window.scrollTo(0,0);
  }

  constructor() { }

  ngOnInit() {
  }

}
