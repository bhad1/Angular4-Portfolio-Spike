import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCarouselComponent } from './angular-carousel.component';

describe('AngularCarouselComponent', () => {
  let component: AngularCarouselComponent;
  let fixture: ComponentFixture<AngularCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
