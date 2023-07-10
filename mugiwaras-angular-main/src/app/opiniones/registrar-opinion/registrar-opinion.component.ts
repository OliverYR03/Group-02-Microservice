import { Component, OnInit }            from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Opiniones } from '../opiniones-service/opiniones';
import { OpinionesService } from '../opiniones-service/opiniones.service';
@Component({
  selector: 'app-registrar-opinion',
  templateUrl: './registrar-opinion.component.html',
  styleUrls: ['./registrar-opinion.component.css']
})
export class RegistrarOpinionComponent implements OnInit{

  id:number;
  opiniones: Opiniones = new Opiniones();
  constructor(private route:ActivatedRoute, private opinionesServicio: OpinionesService,private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.opinionesServicio.obtenerOpinionId(this.id).subscribe(dato=> {
      this.opiniones = dato;
    },error => console.log(error));
  }

  
  guardarCliente(){
    this.opinionesServicio.registrarOpinion(this.opiniones).subscribe(dato =>{ 
      console.log(dato);
      this.irALaListaDeOpiniones();

    },error => console.log(error));
  }

  irALaListaDeOpiniones(){
    this.router.navigate(['/opiniones']);
  }

  onSubmit(){
    this.guardarCliente();
  }

  

}
