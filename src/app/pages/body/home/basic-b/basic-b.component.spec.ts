import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBComponent } from './basic-b.component';

describe('BasicBComponent', () => {
  let component: BasicBComponent;
  let fixture: ComponentFixture<BasicBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
