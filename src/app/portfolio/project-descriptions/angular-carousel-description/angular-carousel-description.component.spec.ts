import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCarouselDescriptionComponent } from './angular-carousel-description.component';

describe('AngularCarouselDescriptionComponent', () => {
  let component: AngularCarouselDescriptionComponent;
  let fixture: ComponentFixture<AngularCarouselDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCarouselDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCarouselDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
