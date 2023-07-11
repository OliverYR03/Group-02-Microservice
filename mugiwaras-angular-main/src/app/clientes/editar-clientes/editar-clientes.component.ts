import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../clientes-service/clientes.service';
import { Clientes } from '../clientes-service/clientes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit{

  id:number;
  clientes:Clientes = new Clientes();
  formulario: FormGroup;

  constructor(
    private route:ActivatedRoute, 
    private clientesServicio: ClientesService,
    private router:Router,
    private formBuilder: FormBuilder
    ){
        this.formulario = this.formBuilder.group({
        nombre:['', [Validators.required]],
        direccion:['', [Validators.required]],
        numero:['', [Validators.required]],
        correo:['', [Validators.required]],
        tipopago:['', [Validators.required]],
      });}

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
