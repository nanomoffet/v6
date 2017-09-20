import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAComponent } from './basic-a.component';

describe('BasicAComponent', () => {
  let component: BasicAComponent;
  let fixture: ComponentFixture<BasicAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
