import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdTooltipComponent } from './md-tooltip.component';

describe('MdTooltipComponent', () => {
  let component: MdTooltipComponent;
  let fixture: ComponentFixture<MdTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
