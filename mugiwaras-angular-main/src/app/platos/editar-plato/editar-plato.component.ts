import { Component, OnInit } from '@angular/core';
import { Platos } from '../platos-service/platos';
import { PlatosService } from '../platos-service/platos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-plato',
  templateUrl: './editar-plato.component.html',
  styleUrls: ['./editar-plato.component.css']
})
export class EditarPlatoComponent implements OnInit{

  id:number;
  platos:Platos = new Platos();
  constructor(private route:ActivatedRoute, private platosServicio: PlatosService,private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.platosServicio.obtenerPlatoPorId(this.id).subscribe(dato=> {
      this.platos = dato;
    },error => console.log(error));
      
  }

  irALaListaDePlato(){
    this.router.navigate(['/platos']);
  }

  onSubmit(){
    this.platosServicio.actualizarPlato(this.id,this.platos).subscribe(dato => {
      this.irALaListaDePlato();
    },error => console.log(error));
  }



}
