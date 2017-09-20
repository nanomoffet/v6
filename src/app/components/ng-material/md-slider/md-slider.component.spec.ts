import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSliderComponent } from './md-slider.component';

describe('MdSliderComponent', () => {
  let component: MdSliderComponent;
  let fixture: ComponentFixture<MdSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
