import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlinksComponent } from './searchlinks.component';

describe('SearchlinksComponent', () => {
  let component: SearchlinksComponent;
  let fixture: ComponentFixture<SearchlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
