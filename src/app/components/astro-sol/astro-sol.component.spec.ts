import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroSolComponent } from './astro-sol.component';

describe('AstroSolComponent', () => {
  let component: AstroSolComponent;
  let fixture: ComponentFixture<AstroSolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstroSolComponent]
    });
    fixture = TestBed.createComponent(AstroSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
