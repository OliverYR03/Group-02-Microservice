import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Opiniones } from '../opiniones-service/opiniones';
import { OpinionesService } from '../opiniones-service/opiniones.service';

@Component({
  selector: 'app-editar-opinion',
  templateUrl: './editar-opinion.component.html',
  styleUrls: ['./editar-opinion.component.css']
})
export class EditarOpinionComponent implements OnInit{

  id:number;
  opiniones:Opiniones = new Opiniones();
  constructor(private route:ActivatedRoute, private opinionesServicio: OpinionesService,private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.opinionesServicio.obtenerOpinionId(this.id).subscribe(dato=> {
      this.opiniones = dato;
    },error => console.log(error));
      
  }

  irALaListaDeOpinion(){
    this.router.navigate(['/opiniones']);
  }

  onSubmit(){
    this.opinionesServicio.actualizarOpinion(this.id,this.opiniones).subscribe(dato => {
      this.irALaListaDeOpinion();
    },error => console.log(error));
  }



}
