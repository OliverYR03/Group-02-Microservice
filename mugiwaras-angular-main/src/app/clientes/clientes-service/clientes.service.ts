import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Clientes } from './clientes';
import { Ordenes } from 'src/app/ordenes/ordenes-service/ordenes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  //Url para obtener el listado de personal
  private baseURL = "http://localhost:8085/ms-mugiwaras/api/clientes/listar";
  
  constructor(private httpClient : HttpClient) {}

  //Para obtener la lista de personal
  obtenerListaDeClientes():Observable<Clientes[]>{
    return this.httpClient.get<Clientes[]>(`${this.baseURL}`);
  }

  //para crear un nuevo empleado
  registrarClientes(clientes:Clientes): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, clientes);

  }

  actualizarCliente(id:number, clientes:Clientes) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,clientes);
  }

  obtenerClientePorId(id:number):Observable<Clientes>{
    return this.httpClient.get<Clientes>(`${this.baseURL}/${id}`);
  }

  eliminarCliente(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  obtenerListaDeOrdenes():Observable<Ordenes[]>{
    return this.httpClient.get<Ordenes[]>(`${this.baseURL}`);
  }
}
