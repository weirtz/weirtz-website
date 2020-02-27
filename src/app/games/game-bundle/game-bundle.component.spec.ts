import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBundleComponent } from './game-bundle.component';

describe('GameBundleComponent', () => {
  let component: GameBundleComponent;
  let fixture: ComponentFixture<GameBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
