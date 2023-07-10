import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Personal } from '../servicio-personal/personal';
import { PersonalService } from '../servicio-personal/personal.service';

@Component({
  selector: 'app-editar-personal',
  templateUrl: './editar-personal.component.html',
  styleUrls: ['./editar-personal.component.css']
})
export class EditarPersonalComponent implements OnInit{

  id:number;
  personal:Personal = new Personal();
  constructor(private route:ActivatedRoute, private personalServicio: PersonalService,private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personalServicio.obtenerPersonalPorId(this.id).subscribe(dato=> {
      this.personal = dato;
    },error => console.log(error));
      
  }

  irALaListaDeOpinion(){
    this.router.navigate(['/personal']);
  }

  onSubmit(){
    this.personalServicio.actualizarPersonal(this.id,this.personal).subscribe(dato => {
      this.irALaListaDeOpinion();
    },error => console.log(error));
  }



}