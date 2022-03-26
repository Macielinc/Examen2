package uia.com.apirest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import uia.com.apirest.modelo.CotizacionModelo;
import uia.com.apirest.modelo.ItemComprasUIAModelo;
import uia.com.apirest.modelo.ItemSolicitudOCModelo;
import uia.com.apirest.servicio.CotizacionServicio;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CotizacionesController
{
    private CotizacionServicio servicioCotizaciones;
    //ArrayList<CotizacionModelo> cotizaciones = new ArrayList<CotizacionModelo>();

    @Autowired
    public CotizacionesController(CotizacionServicio servicio) throws IOException {
        this.servicioCotizaciones = servicio;
    }

    @GetMapping("/cotizaciones")
    public ArrayList<CotizacionModelo> cotizaciones(@RequestParam int id)
    {
        System.out.println("Ejecutando solicitudesOC con id:"+id);
        return servicioCotizaciones.getCotizaciones(id);
    }



    @GetMapping("/cotizacion/{id}")
    public CotizacionModelo cotizacionById(@PathVariable int id)
    {
        return  servicioCotizaciones.getCotizacion(id);
    }

    @DeleteMapping("/cotizacion/{id}")
    public CotizacionModelo deleteCotizacionById(@PathVariable int id)
    {
        return  servicioCotizaciones.deleteCotizacion(id);
    }

    @PutMapping("/cotizacion/{id}")
    public CotizacionModelo cotizacionPutById(@PathVariable int id, @RequestBody ItemComprasUIAModelo newItem)
    {
        return  servicioCotizaciones.putCotizacion(id, newItem);
    }

    public CotizacionServicio getServicioCotizaciones() {
        return servicioCotizaciones;
    }

    public void setServicioCotizaciones(CotizacionServicio servicioCotizaciones) {
        this.servicioCotizaciones = servicioCotizaciones;
    }
}
