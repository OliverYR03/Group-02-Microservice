import { Component, OnInit }            from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Clientes }             from '../clientes-service/clientes';
import { ClientesService }      from '../clientes-service/clientes.service';

@Component({
  selector: 'app-registrar-clientes',
  templateUrl: './registrar-clientes.component.html',
  styleUrls: ['./registrar-clientes.component.css']
})
export class RegistrarClientesComponent implements OnInit{

  id:number;
  clientes: Clientes = new Clientes();
  constructor(private route:ActivatedRoute, private clientesServicio: ClientesService,private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientesServicio.obtenerClientePorId(this.id).subscribe(dato=> {
      this.clientes = dato;
    },error => console.log(error));
  }

  
  guardarCliente(){
    this.clientesServicio.registrarClientes(this.clientes).subscribe(dato =>{ 
      console.log(dato);
      this.irALaListaDeClientes();

    },error => console.log(error));
  }

  irALaListaDeClientes(){
    this.router.navigate(['/clientes']);
  }

  onSubmit(){
    this.guardarCliente();
  }

  

}