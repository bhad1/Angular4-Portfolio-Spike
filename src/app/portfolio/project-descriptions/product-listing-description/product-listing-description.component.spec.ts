import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListingDescriptionComponent } from './product-listing-description.component';

describe('ProductListingDescriptionComponent', () => {
  let component: ProductListingDescriptionComponent;
  let fixture: ComponentFixture<ProductListingDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListingDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListingDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
