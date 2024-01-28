import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './form/formulario.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './about us/nosotros.component';
import { ProyectosComponent } from './proyects/proyectos.component';
import { ServiciosComponent } from './our services/servicios.component';
import { SliderComponent } from './slider/slider.component';




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
  },
  {
    path:'slider',
    component:SliderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
