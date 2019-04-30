import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancioneroPage } from './cancionero.page';

describe('CancioneroPage', () => {
  let component: CancioneroPage;
  let fixture: ComponentFixture<CancioneroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancioneroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancioneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
