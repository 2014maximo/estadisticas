import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroLunaComponent } from './astro-luna.component';

describe('AstroLunaComponent', () => {
  let component: AstroLunaComponent;
  let fixture: ComponentFixture<AstroLunaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstroLunaComponent]
    });
    fixture = TestBed.createComponent(AstroLunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
