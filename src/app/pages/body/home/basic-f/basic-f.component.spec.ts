import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFComponent } from './basic-f.component';

describe('BasicFComponent', () => {
  let component: BasicFComponent;
  let fixture: ComponentFixture<BasicFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
