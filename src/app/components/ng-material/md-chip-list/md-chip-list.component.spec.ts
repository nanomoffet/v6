import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdChipListComponent } from './md-chip-list.component';

describe('MdChipListComponent', () => {
  let component: MdChipListComponent;
  let fixture: ComponentFixture<MdChipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdChipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdChipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
