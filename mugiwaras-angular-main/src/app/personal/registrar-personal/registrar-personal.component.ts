import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Personal } from '../servicio-personal/personal';
import { PersonalService } from '../servicio-personal/personal.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar-personal',
  templateUrl: './registrar-personal.component.html',
  styleUrls: ['./registrar-personal.component.css']
})
export class RegistrarPersonalComponent implements OnInit{

  personal: Personal = new Personal();

  constructor(private personalServicio:PersonalService, private router:Router){

  }

  ngOnInit(): void {
 
      
  }

  actualizarPersonal(idpersonal:number){
    this.router.navigate(['actualizar-personal', idpersonal]);
  }




  guardarPersonal(){
    this.personalServicio.registrarPersonal(this.personal).subscribe(dato =>{ 
      console.log(dato);

    },error => console.log(error));
  }

  irALaListaDePersonal(){
    this.router.navigate(['/personal']);
  }


  onSubmit(){
    this.guardarPersonal();
  }

}
