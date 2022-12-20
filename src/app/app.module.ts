import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { RouterModule, Routes } from '@angular/router';

const AppRoutes:Routes=[
  {
    path:'proyectos',
    component:ProyectosComponent
  },
  {
    path:'',
    component:HomeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectosComponent,
    NosotrosComponent,
    FormularioComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
