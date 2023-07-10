import { Component, OnInit } from '@angular/core';
import { Personal } from '../servicio-personal/personal';
import { PersonalService } from '../servicio-personal/personal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-personal',
  templateUrl: './lista-personal.component.html',
  styleUrls: ['./lista-personal.component.css']
})
export class ListaPersonalComponent implements OnInit{

  personal: Personal[];

  constructor(private personalServicio:PersonalService, private router:Router){

  }

  ngOnInit(): void {
    this.obtenerPersonal();
  }

  actualizarPersonal(id:number){
    this.router.navigate(['personal/editar', id]);
  }
  
  private obtenerPersonal(){
    this.personalServicio.obtenerListaDePersonal().subscribe(dato => {
      this.personal = dato;
    });
  }

  eliminarPersonal(id:number){
    this.personalServicio.eliminarPersonal(id).subscribe(dato => {
      console.log(dato);
      this.obtenerPersonal();
    });
  }

  
  

}

  
  


