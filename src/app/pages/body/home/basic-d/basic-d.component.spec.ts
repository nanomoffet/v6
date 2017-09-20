import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDComponent } from './basic-d.component';

describe('BasicDComponent', () => {
  let component: BasicDComponent;
  let fixture: ComponentFixture<BasicDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
