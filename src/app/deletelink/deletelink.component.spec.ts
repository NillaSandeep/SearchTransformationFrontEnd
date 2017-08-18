import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelinkComponent } from './deletelink.component';

describe('DeletelinkComponent', () => {
  let component: DeletelinkComponent;
  let fixture: ComponentFixture<DeletelinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletelinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
