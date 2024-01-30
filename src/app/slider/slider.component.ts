import { Component } from '@angular/core';
import { SliderService } from '../slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent {


  tarjetas = [{
    "imagen": "/assets/imagenes/EquipoMarketing.jpg",
    "titulo": "Content Writing",
    "descripcion":"",
    "colorOpacidad":"rgba(46, 173, 185, 0.2)"
  },
  {
    "imagen": "/assets/imagenes/hojaMarketing.jpg",
    "titulo": "Social Media Marketing (SMM)",
    "descripcion":"",
    "colorOpacidad":"rgba(46, 173, 185, 0.2)"
  },
  {
    "imagen": "/assets/imagenes/mujerConGrafico.jpg",
    "titulo": "Pay Per Click (PPC) Management",
    "descripcion":"",
    "colorOpacidad":"rgba(46, 173, 185, 0.2)"
  }
  ];
   estilosTarjeta = {
    opacity: '{{ tarjeta.colorOpacidad }}'
  };

}
