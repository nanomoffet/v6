import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaModalComponent } from './ba-modal.component';

describe('BaModalComponent', () => {
  let component: BaModalComponent;
  let fixture: ComponentFixture<BaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
