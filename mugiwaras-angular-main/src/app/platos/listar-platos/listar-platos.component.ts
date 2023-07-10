import { Component, OnInit }  from '@angular/core';
import { Platos }             from '../platos-service/platos';
import { PlatosService }      from '../platos-service/platos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-personal',
  templateUrl: './listar-platos.component.html',
  styleUrls: ['./listar-platos.component.css']
})
export class ListarPlatosComponent implements OnInit{
  reg: any = 0;
  platos: Platos[];
  sumar: boolean = true;
  constructor(private platosServicio:PlatosService, private router:Router){
    console.log(this.reg)
  }

  ngOnInit(): void {
    this.obtenerPlatos();
  }

  mostrar(){
    if(this.sumar){
      this.reg= this.reg +1;
    }else{
      this.reg = this.reg -1;
    }
    this.sumar = !this.sumar;
  } 

  actualizarPlato(id:number){
    this.router.navigate(['platos/editar', id]);
  }
  
  private obtenerPlatos(){
    this.platosServicio.obtenerListaDePlatos().subscribe(dato => {
      this.platos = dato;
    });
  }

  eliminarPlato(id:number){
    this.platosServicio.eliminarPlato(id).subscribe(dato => {
      console.log(dato);
      this.obtenerPlatos();
    });
  }

  
  

}

  
  

