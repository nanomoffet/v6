import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaRatingComponent } from './ba-rating.component';

describe('BaRatingComponent', () => {
  let component: BaRatingComponent;
  let fixture: ComponentFixture<BaRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
