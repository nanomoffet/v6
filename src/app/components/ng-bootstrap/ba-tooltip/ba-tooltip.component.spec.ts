import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaTooltipComponent } from './ba-tooltip.component';

describe('BaTooltipComponent', () => {
  let component: BaTooltipComponent;
  let fixture: ComponentFixture<BaTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
