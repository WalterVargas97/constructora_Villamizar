import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './form/formulario.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PrivacyPolicyComponent } from './privacyPolicy/privacyPolicy.component';
import { ServiciosComponent } from './ourServices/servicios.component';
import { SliderComponent } from './slider/slider.component';
import { PresentacionComponent } from './presentacion/presentacion.component';

const routes: Routes = [
  {
    path:'privacyPolicy',
    component:PrivacyPolicyComponent
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
  {
    path:'presentacion',
    component:PresentacionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
