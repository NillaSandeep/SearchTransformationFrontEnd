import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelinksComponent } from './createlinks.component';

describe('CreatelinksComponent', () => {
  let component: CreatelinksComponent;
  let fixture: ComponentFixture<CreatelinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatelinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
