import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaProgressbarComponent } from './ba-progressbar.component';

describe('BaProgressbarComponent', () => {
  let component: BaProgressbarComponent;
  let fixture: ComponentFixture<BaProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
