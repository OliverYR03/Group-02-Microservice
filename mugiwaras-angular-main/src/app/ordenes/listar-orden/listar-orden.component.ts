import { Component, OnInit } from '@angular/core';
import { Ordenes }             from '../ordenes-service/ordenes';
import { OrdenesService }      from '../ordenes-service/ordenes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-orden',
  templateUrl: './listar-orden.component.html',
  styleUrls: ['./listar-orden.component.css']
})
export class ListarOrdenComponent implements OnInit {

  ordenes:Ordenes[];

  constructor(private ordenesServicio:OrdenesService, private router:Router){}
  

  ngOnInit(): void {
    this.obtenerOrdenes();
  }

  actualizarOrden(id:number){
    this.router.navigate(['ordenes/editar', id]);
  }

  private obtenerOrdenes(){
    this.ordenesServicio.obtenerListaDeOrdenes().subscribe(dato => {
      this.ordenes = dato;
    });
  }
 
  eliminarOrden(id:number){
    this.ordenesServicio.eliminarOrden(id).subscribe(dato => {
      console.log(dato);
      this.obtenerOrdenes();
    });
  }

}
