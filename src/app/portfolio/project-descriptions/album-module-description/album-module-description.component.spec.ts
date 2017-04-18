import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumModuleDescriptionComponent } from './album-module-description.component';

describe('AlbumModuleDescriptionComponent', () => {
  let component: AlbumModuleDescriptionComponent;
  let fixture: ComponentFixture<AlbumModuleDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumModuleDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumModuleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
