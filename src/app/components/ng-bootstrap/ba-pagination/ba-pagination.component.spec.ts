import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaPaginationComponent } from './ba-pagination.component';

describe('BaPaginationComponent', () => {
  let component: BaPaginationComponent;
  let fixture: ComponentFixture<BaPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
