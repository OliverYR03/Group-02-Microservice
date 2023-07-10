import { Component, OnInit }  from '@angular/core';
import { Opiniones }             from '../opiniones-service/opiniones';
import { OpinionesService }      from '../opiniones-service/opiniones.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-opiniones',
  templateUrl: './listar-opiniones.component.html',
  styleUrls: ['./listar-opiniones.component.css']
})
export class ListarOpinionesComponent implements OnInit {

  opiniones:Opiniones[];

  constructor(private opinionesServicio:OpinionesService, private router:Router){}
  

  ngOnInit(): void {
    this.obtenerOpiniones();
  }

  actualizarOpinion(id:number){
    this.router.navigate(['opiniones/editar', id]);
  }

  private obtenerOpiniones(){
    this.opinionesServicio.obtenerListaDeOpiniones().subscribe(dato => {
      this.opiniones = dato;
    });
  }
 
  eliminarOpinion(id:number){
    this.opinionesServicio.eliminarOpinion(id).subscribe(dato => {
      console.log(dato);
      this.obtenerOpiniones();
    });
  }

}
