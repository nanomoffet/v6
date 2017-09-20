import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridIconsComponent } from './grid-icons.component';

describe('GridIconsComponent', () => {
  let component: GridIconsComponent;
  let fixture: ComponentFixture<GridIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
