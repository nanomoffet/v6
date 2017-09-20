import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaButtonComponent } from './ba-button.component';

describe('BaButtonComponent', () => {
  let component: BaButtonComponent;
  let fixture: ComponentFixture<BaButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
