import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Opiniones } from './opiniones';

@Injectable({
  providedIn: 'root'
})
export class OpinionesService {


  //Url para obtener el listado de personal
  private baseURL = "http://localhost:8085/ms-mugiwaras/api/opiniones/listar";
  
  constructor(private httpClient : HttpClient) {}

  //Para obtener la lista de personal
  obtenerListaDeOpiniones():Observable<Opiniones[]>{
    return this.httpClient.get<Opiniones[]>(`${this.baseURL}`);
  }

  //para crear un nuevo empleado
  registrarOpinion(opiniones:Opiniones): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, opiniones);

  }
  actualizarOpinion(id:number, platos:Opiniones) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,platos);
  }

  obtenerOpinionId(id:number):Observable<Opiniones>{
    return this.httpClient.get<Opiniones>(`${this.baseURL}/${id}`);
  }

  eliminarOpinion(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
