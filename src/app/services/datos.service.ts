import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'
 
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  public datos = new BehaviorSubject<any[]>([]);

  $obtenerdatos = this.datos.asObservable();

  constructor() { }

  enviarDatos(list:Array<any>[]){
    this.datos.next(list);
  }
}
