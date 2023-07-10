import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Ordenes } from './ordenes';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {


  //Url para obtener el listado de personal
  private baseURL = "http://localhost:8085/ms-mugiwaras/api/ordenes/listar";
  
  
  constructor(private httpClient : HttpClient) {}

  //Para obtener la lista de personal
  obtenerListaDeOrdenes():Observable<Ordenes[]>{
    return this.httpClient.get<Ordenes[]>(`${this.baseURL}`);
  }

  //para crear un nuevo empleado
  registrarOrden(ordenes:Ordenes): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, ordenes);
  }

  actualizarOrden(id:number, ordenes:Ordenes) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,ordenes);
  }

  obtenerOrdenPorId(id:number):Observable<Ordenes>{
    return this.httpClient.get<Ordenes>(`${this.baseURL}/${id}`);
  }

  eliminarOrden(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
