import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBundleComponent } from './photo-bundle.component';

describe('PhotoBundleComponent', () => {
  let component: PhotoBundleComponent;
  let fixture: ComponentFixture<PhotoBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
