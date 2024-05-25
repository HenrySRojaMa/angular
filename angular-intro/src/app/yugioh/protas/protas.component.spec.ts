import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtasComponent } from './protas.component';

describe('ProtasComponent', () => {
  let component: ProtasComponent;
  let fixture: ComponentFixture<ProtasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProtasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProtasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
