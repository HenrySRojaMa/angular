import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsMainPageComponent } from './gifs-main-page.component';

describe('GifsMainPageComponent', () => {
  let component: GifsMainPageComponent;
  let fixture: ComponentFixture<GifsMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GifsMainPageComponent]
    });
    fixture = TestBed.createComponent(GifsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
