import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyects/proyectos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormularioComponent } from './form/formulario.component';
import { ServiciosComponent } from './our services/servicios.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { SwitchLanguagesComponent } from './switch-languages/switch-languages.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
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
    SwitchLanguagesComponent,
    PresentacionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/languages/' ,'.json');

}
