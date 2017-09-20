import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActItemsHoldComponent } from './act-items-hold.component';

describe('ActItemsHoldComponent', () => {
  let component: ActItemsHoldComponent;
  let fixture: ComponentFixture<ActItemsHoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActItemsHoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActItemsHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
