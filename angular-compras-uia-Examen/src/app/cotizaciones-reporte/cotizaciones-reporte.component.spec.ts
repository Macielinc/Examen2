import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionesReporteComponent } from './cotizaciones-reporte.component';

describe('CotizacionesReporteComponent', () => {
  let component: CotizacionesReporteComponent;
  let fixture: ComponentFixture<CotizacionesReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizacionesReporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionesReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
