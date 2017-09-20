import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDateComponent } from './input-article-date.component';

describe('ArticleDateComponent', () => {
  let component: ArticleDateComponent;
  let fixture: ComponentFixture<ArticleDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
