import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisInputComponent } from './pais-input.component';

describe('PaisInputComponent', () => {
  let component: PaisInputComponent;
  let fixture: ComponentFixture<PaisInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaisInputComponent]
    });
    fixture = TestBed.createComponent(PaisInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
