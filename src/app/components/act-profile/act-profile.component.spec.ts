import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActProfileComponent } from './act-profile.component';

describe('ActProfileComponent', () => {
  let component: ActProfileComponent;
  let fixture: ComponentFixture<ActProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
