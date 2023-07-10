import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Platos } from '../platos-service/platos';
import { PlatosService } from '../platos-service/platos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-platos',
  templateUrl: './registrar-platos.component.html',
  styleUrls: ['./registrar-platos.component.css']
})
export class RegistrarPlatosComponent implements OnInit{

  platos: Platos = new Platos();

  constructor(private platosServicio:PlatosService, private router:Router){

  }

  ngOnInit(): void {
 
      
  }

  actualizarPlato(idplato:number){
    this.router.navigate(['actualizar-platos', idplato]);
  }

  guardarPlato(){
    this.platosServicio.registrarPlatos(this.platos).subscribe(dato =>{ 
      console.log(dato);
      this.irALaListaDePlato();

    },error => console.log(error));
  }

  irALaListaDePlato(){
    this.router.navigate(['/platos']);
  }


  onSubmit(){
    this.guardarPlato();
  }

  eliminarPlato(){
    
  }

}
