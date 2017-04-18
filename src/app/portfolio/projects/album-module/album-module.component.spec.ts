import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumModuleComponent } from './album-module.component';

describe('AlbumModuleComponent', () => {
  let component: AlbumModuleComponent;
  let fixture: ComponentFixture<AlbumModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
