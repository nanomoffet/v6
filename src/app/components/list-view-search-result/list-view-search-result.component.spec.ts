import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewSearchResultComponent } from './list-view-search-result.component';

describe('ListViewSearchResultComponent', () => {
  let component: ListViewSearchResultComponent;
  let fixture: ComponentFixture<ListViewSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
