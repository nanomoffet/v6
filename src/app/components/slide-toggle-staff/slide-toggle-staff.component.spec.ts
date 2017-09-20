import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleStaffComponent } from './slide-toggle-staff.component';

describe('SlideToggleStaffComponent', () => {
  let component: SlideToggleStaffComponent;
  let fixture: ComponentFixture<SlideToggleStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideToggleStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideToggleStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
