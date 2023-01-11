import { Component } from '@angular/core';
import { SliderService } from '../slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent {
  constructor(private sliderservice: SliderService) {
    this.sliderservice.loadScript();
  }

}
