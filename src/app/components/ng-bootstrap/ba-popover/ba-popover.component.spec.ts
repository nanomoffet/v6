import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaPopoverComponent } from './ba-popover.component';

describe('BaPopoverComponent', () => {
  let component: BaPopoverComponent;
  let fixture: ComponentFixture<BaPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
