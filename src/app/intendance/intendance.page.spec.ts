import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntendancePage } from './intendance.page';

describe('IntendancePage', () => {
  let component: IntendancePage;
  let fixture: ComponentFixture<IntendancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntendancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
