import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievelinksComponent } from './retrievelinks.component';

describe('RetrievelinksComponent', () => {
  let component: RetrievelinksComponent;
  let fixture: ComponentFixture<RetrievelinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrievelinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievelinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
