import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasDevComponent } from './empresas-dev.component';

describe('EmpresasDevComponent', () => {
  let component: EmpresasDevComponent;
  let fixture: ComponentFixture<EmpresasDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresasDevComponent]
    });
    fixture = TestBed.createComponent(EmpresasDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
