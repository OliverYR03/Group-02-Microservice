import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//EDITAR
import { ListaPersonalComponent } from './personal/lista-personal/lista-personal.component';
import { ListarPlatosComponent } from './platos/listar-platos/listar-platos.component';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';
import { ListarOpinionesComponent } from './opiniones/listar-opiniones/listar-opiniones.component';
import { ListarOrdenComponent } from './ordenes/listar-orden/listar-orden.component';

//REGISTRAR
import { RegistrarPersonalComponent } from './personal/registrar-personal/registrar-personal.component';
import { RegistrarPlatosComponent } from './platos/registrar-platos/registrar-platos.component';
import { RegistrarOrdenComponent } from './ordenes/registrar-orden/registrar-orden.component';
import { RegistrarOpinionComponent } from './opiniones/registrar-opinion/registrar-opinion.component';
import { RegistrarClientesComponent } from './clientes/registrar-clientes/registrar-clientes.component';

//EDITAR
import { EditarPlatoComponent } from './platos/editar-plato/editar-plato.component';
import { EditarOrdenComponent } from './ordenes/editar-orden/editar-orden.component';
import { EditarClientesComponent } from './clientes/editar-clientes/editar-clientes.component';
import { EditarOpinionComponent } from './opiniones/editar-opinion/editar-opinion.component';
import { EditarPersonalComponent } from './personal/editar-personal/editar-personal.component';


const routes: Routes = [
  // RUTAS DE LISTA
  {path : 'personal', component:ListaPersonalComponent},
  {path : 'platos', component:ListarPlatosComponent},
  {path : 'clientes', component:ListarClientesComponent},
  {path : 'opiniones', component:ListarOpinionesComponent},
  {path : 'ordenes', component:ListarOrdenComponent},
  {path :'', redirectTo:'personal', pathMatch:'full'},
  //NUEVOS
  {path : 'personal/nuevo', component: RegistrarPersonalComponent},
  {path : 'platos/nuevo', component: RegistrarPlatosComponent},
  {path : 'ordenes/nuevo', component: RegistrarOrdenComponent},
  {path : 'clientes/nuevo', component: RegistrarClientesComponent},
  {path : 'opiniones/nuevo', component: RegistrarOpinionComponent},

  //EDITAR
   {path : 'platos/editar/:id', component: EditarPlatoComponent},
   {path : 'ordenes/editar/:id', component: EditarOrdenComponent},
   {path : 'clientes/editar/:id', component: EditarClientesComponent},
   {path : 'opiniones/editar/:id', component: EditarOpinionComponent},
   {path : 'personal/editar/:id', component: EditarPersonalComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


