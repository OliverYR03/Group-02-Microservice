import { Component, OnInit }  from '@angular/core';
import { Clientes }             from '../clientes-service/clientes';
import { ClientesService }      from '../clientes-service/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes:Clientes[];

  constructor(private clientesServicio:ClientesService, private router:Router){}
  

  ngOnInit(): void {
    this.obtenerClientes();
  }

  actualizarCliente(id:number){
    this.router.navigate(['clientes/editar', id]);
  }

  private obtenerClientes(){
    this.clientesServicio.obtenerListaDeClientes().subscribe(dato => {
      this.clientes = dato;
    });
  }
 
  eliminarCliente(id:number){
    this.clientesServicio.eliminarCliente(id).subscribe(dato => {
      console.log(dato);
      this.obtenerClientes();
    });
  }

}