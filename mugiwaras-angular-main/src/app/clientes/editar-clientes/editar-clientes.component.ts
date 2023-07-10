import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../clientes-service/clientes.service';
import { Clientes } from '../clientes-service/clientes';
@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit{

  id:number;
  clientes:Clientes = new Clientes();
  constructor(private route:ActivatedRoute, private clientesServicio: ClientesService,private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientesServicio.obtenerClientePorId(this.id).subscribe(dato=> {
      this.clientes = dato;
      
    },error => console.log(error));
      
  }

  irALaListaDeCliente(){
    this.router.navigate(['/clientes']);
  }

  onSubmit(){
    this.clientesServicio.actualizarCliente(this.id,this.clientes).subscribe(dato => {
      this.irALaListaDeCliente();
    },error => console.log(error));
  }



}
