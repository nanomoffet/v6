import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultDescComponent } from './search-result-desc.component';

describe('SearchResultDescComponent', () => {
  let component: SearchResultDescComponent;
  let fixture: ComponentFixture<SearchResultDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
