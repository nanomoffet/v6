import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSlideToggleComponent } from './md-slide-toggle.component';

describe('MdSlideToggleComponent', () => {
  let component: MdSlideToggleComponent;
  let fixture: ComponentFixture<MdSlideToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdSlideToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
