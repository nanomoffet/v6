import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaDropdownComponent } from './ba-dropdown.component';

describe('BaDropdownComponent', () => {
  let component: BaDropdownComponent;
  let fixture: ComponentFixture<BaDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
