import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActHistoryComponent } from './act-history.component';

describe('ActHistoryComponent', () => {
  let component: ActHistoryComponent;
  let fixture: ComponentFixture<ActHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
