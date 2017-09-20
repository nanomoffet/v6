import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEComponent } from './basic-e.component';

describe('BasicEComponent', () => {
  let component: BasicEComponent;
  let fixture: ComponentFixture<BasicEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
