import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaTypeAheadComponent } from './ba-type-ahead.component';

describe('BaTypeAheadComponent', () => {
  let component: BaTypeAheadComponent;
  let fixture: ComponentFixture<BaTypeAheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaTypeAheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaTypeAheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
