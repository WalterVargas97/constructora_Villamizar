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
    "descripcion":"asasd"
  },
  {
    "imagen": "/assets/imagenes/hojaMarketing.jpg",
    "titulo": "Social Media Marketing (SMM)",
    "descripcion":"prueba"
  },
  {
    "imagen": "/assets/imagenes/mujerConGrafico.jpg",
    "titulo": "Pay Per Click (PPC) Management",
    "descripcion":"iishhh"
  }
  ]

}
