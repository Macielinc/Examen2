import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ICotizaciones } from './iCotizaciones';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  cotizacionesUrl = "http://localhost:8080/cotizaciones";
  itemsUrl = "http://localhost:8080/item-cotizacion";
  private cotizaciones$ = new BehaviorSubject<ICotizaciones[]>([]);

  constructor(private http: HttpClient) { }

  public getCotizaciones(id:number)
    {
        this.cotizacionesUrl = "http://localhost:8080/cotizaciones"+`?id=`+id;
        this.http.get<ICotizaciones[]>(this.cotizacionesUrl).subscribe((pozos) => this.cotizaciones$.next(pozos));
        return this.cotizaciones$;
    }
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {      
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead      
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);      
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
        /** POST: add a new Cotizacion to the server */
  public agregaCotizacion(Cotizacion: ICotizaciones): Observable<ICotizaciones>  {
    return this.http.post<ICotizaciones>(this.itemsUrl, Cotizacion, this.httpOptions).pipe(
      tap((newCotizacion: ICotizaciones) => console.log(`added Cotizacion w/ id=${newCotizacion.id}`)),
      catchError(this.handleError<ICotizaciones>('addSolicitud'))
    );
  }
}
