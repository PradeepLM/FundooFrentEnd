import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnotesComponent } from './pinnotes.component';

describe('PinnotesComponent', () => {
  let component: PinnotesComponent;
  let fixture: ComponentFixture<PinnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
