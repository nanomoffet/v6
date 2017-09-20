import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActItemLostfineComponent } from './act-item-lostfine.component';

describe('ActItemLostfineComponent', () => {
  let component: ActItemLostfineComponent;
  let fixture: ComponentFixture<ActItemLostfineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActItemLostfineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActItemLostfineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
