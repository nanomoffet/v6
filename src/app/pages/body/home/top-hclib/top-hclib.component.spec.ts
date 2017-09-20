import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHclibComponent } from './top-hclib.component';

describe('TopHclibComponent', () => {
  let component: TopHclibComponent;
  let fixture: ComponentFixture<TopHclibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHclibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHclibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
