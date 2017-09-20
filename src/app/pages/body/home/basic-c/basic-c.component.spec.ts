import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCComponent } from './basic-c.component';

describe('BasicCComponent', () => {
  let component: BasicCComponent;
  let fixture: ComponentFixture<BasicCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
