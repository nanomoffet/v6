import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActYourListComponent } from './act-your-list.component';

describe('ActYourListComponent', () => {
  let component: ActYourListComponent;
  let fixture: ComponentFixture<ActYourListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActYourListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActYourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
