import { Component } from '@angular/core';
import { SliderService } from '../slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent {
  sliderImages = [
    "/assets/imagenes/EquipoMarketing.jpg",
    "/assets/imagenes/hojaMarketing.jpg",
    "/assets/imagenes/mujerConGrafico.jpg",
    "/assets/imagenes/hojaMarketing.jpg",
    "/assets/imagenes/mujerConGrafico.jpg"

  ]

}
