import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGComponent } from './basic-g.component';

describe('BasicGComponent', () => {
  let component: BasicGComponent;
  let fixture: ComponentFixture<BasicGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
