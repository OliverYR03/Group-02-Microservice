import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Platos } from './platos';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {


  //Url para obtener el listado de personal
  private baseURL = "http://desktop-n48uvci:8085/ms-platos/api/listar";
  
  constructor(private httpClient : HttpClient) {}

  //Para obtener la lista de personal
  obtenerListaDePlatos():Observable<Platos[]>{
    return this.httpClient.get<Platos[]>(`${this.baseURL}`);
  }

  //para crear un nuevo empleado
  registrarPlatos(platos:Platos): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, platos);
  }

  actualizarPlato(id:number, platos:Platos) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,platos);
  }

  obtenerPlatoPorId(id:number):Observable<Platos>{
    return this.httpClient.get<Platos>(`${this.baseURL}/${id}`);
  }

  eliminarPlato(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
