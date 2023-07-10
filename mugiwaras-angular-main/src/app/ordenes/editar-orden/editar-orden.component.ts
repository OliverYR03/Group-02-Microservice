import { Component, OnInit } from '@angular/core';
import { Ordenes } from '../ordenes-service/ordenes';
import { OrdenesService } from '../ordenes-service/ordenes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientes } from 'src/app/clientes/clientes-service/clientes';

@Component({
  selector: 'app-editar-orden',
  templateUrl: './editar-orden.component.html',
  styleUrls: ['./editar-orden.component.css']
})
export class EditarOrdenComponent implements OnInit{

  id:number;
  ordenes:Ordenes = new Ordenes();
  constructor(private route:ActivatedRoute, private ordenesServicio: OrdenesService,private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ordenesServicio.obtenerOrdenPorId(this.id).subscribe(dato=> {
      this.ordenes = dato;
    },error => console.log(error));
      
  }

  irALaListaDeOrden(){
    this.router.navigate(['/ordenes']);
  }

  onSubmit(){
    this.ordenesServicio.actualizarOrden(this.id,this.ordenes).subscribe(dato => {
      this.irALaListaDeOrden();
    },error => console.log(error));
  }
}

