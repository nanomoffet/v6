import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAddtionsComponent } from './search-addtions.component';

describe('SearchAddtionsComponent', () => {
  let component: SearchAddtionsComponent;
  let fixture: ComponentFixture<SearchAddtionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAddtionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAddtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
