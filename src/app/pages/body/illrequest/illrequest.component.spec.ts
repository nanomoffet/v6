import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllrequestComponent } from './illrequest.component';

describe('IllrequestComponent', () => {
  let component: IllrequestComponent;
  let fixture: ComponentFixture<IllrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
