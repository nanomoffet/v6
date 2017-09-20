import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaRatingOnlyComponent } from './ba-rating-only.component';

describe('BaRatingOnlyComponent', () => {
  let component: BaRatingOnlyComponent;
  let fixture: ComponentFixture<BaRatingOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaRatingOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaRatingOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
