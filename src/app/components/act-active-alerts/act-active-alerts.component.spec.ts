import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActActiveAlertsComponent } from './act-active-alerts.component';

describe('ActActiveAlertsComponent', () => {
  let component: ActActiveAlertsComponent;
  let fixture: ComponentFixture<ActActiveAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActActiveAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActActiveAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
