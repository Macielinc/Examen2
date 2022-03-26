import { Component, Input, OnInit } from '@angular/core';
import { ICotizaciones } from '../iCotizaciones';
import { IReporte } from '../iReporte';
import { CotizacionesService } from '../cotizaciones.service';

@Component({
  selector: 'app-cotizaciones-reporte',
  templateUrl: './cotizaciones-reporte.component.html',
  styleUrls: ['./cotizaciones-reporte.component.css']
})
export class CotizacionesReporteComponent implements OnInit {

  public cotizacion = { name: "", id: 0, padre:0 }

cotizaciones: ICotizaciones[] = [];

 selectedCotizacion?: ICotizaciones;

 @Input() reporte!: IReporte;

  constructor(public datosCotizaciones:CotizacionesService) { }

  ngOnInit(): void {
    this.datosCotizaciones.getCotizaciones(this.reporte.id).subscribe((data: any[])=>{
      console.log(data);
      this.cotizaciones = data;
    })
  }

  onSelect(cotizacion: ICotizaciones): void {
    this.selectedCotizacion =cotizacion;
  }
  agregar(name: string, id:string): void {
    name = name.trim();

    var newCotizacion = <ICotizaciones>{};
    
    newCotizacion.id=id;
    newCotizacion.name=name;
    newCotizacion.type="cotizacionesNS";
    
    if (!name) { return; }
    this.datosCotizaciones.agregaCotizacion(newCotizacion)
      .subscribe(cotizacion => {
        this.cotizaciones.push(cotizacion);
      });
  }

}
