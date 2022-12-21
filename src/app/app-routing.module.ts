import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {
    path:'proyectos',
    component:ProyectosComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'formulario',
    component:FormularioComponent
  },
  {
    path:'servicios',
    component:ServiciosComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
