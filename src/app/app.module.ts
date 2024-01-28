import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { tslib }  from 'tslib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyects/proyectos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormularioComponent } from './form/formulario.component';
import { ServiciosComponent } from './our services/servicios.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectosComponent,
    NosotrosComponent,
    FormularioComponent,
    ServiciosComponent,
    FooterComponent,
    SliderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
