import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Personal } from './personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  //Url para obtener el listado de personal
  private baseURL = "http://localhost:8085/ms-mugiwaras/api/personal/listar";
  
  constructor(private httpClient : HttpClient) {}

  //Para obtener la lista de personal
  obtenerListaDePersonal():Observable<Personal[]>{
    return this.httpClient.get<Personal[]>(`${this.baseURL}`);
  }

  //para crear un nuevo empleado
  registrarPersonal(personal:Personal): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, personal);
  }

  actualizarPersonal(id:number, platos:Personal) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,platos);
  }

  obtenerPersonalPorId(id:number):Observable<Personal>{
    return this.httpClient.get<Personal>(`${this.baseURL}/${id}`);
  }

  eliminarPersonal(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
