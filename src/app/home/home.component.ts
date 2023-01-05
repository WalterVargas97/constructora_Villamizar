import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{

  /*private slider: HTMLElement;
  private slides: HTMLElement[];
  private currentSlide: number;
  private next: HTMLElement;
  private prev: HTMLElement;*/


  constructor() {/*
    this.slider = window.document.getElementById('slider') || window.document.createElement('div');
    this.slides = [].slice.call(this.slider.getElementsByClassName('slide'));
    this.currentSlide = 0;
    this.next = window.document.getElementById('next') || window.document.createElement('div');
    this.prev = window.document.getElementById('prev') || window.document.createElement('div');
    this.showSlide(this.currentSlide);*/


}

  ngOnInit(): void {}}
    /*this.slider = window.document.getElementById('slider') || window.document.createElement('div');
    this.slides = [].slice.call(this.slider.getElementsByClassName('slide'));
    this.currentSlide = 0;
    this.next = window.document.getElementById('next') || window.document.createElement('div');
    this.prev = window.document.getElementById('prev') || window.document.createElement('div');
    this.showSlide(this.currentSlide);

    this.next.addEventListener('click', () => {
      this.showSlide(this.currentSlide + 1);
    });

    this.prev.addEventListener('click', () => {
      this.showSlide(this.currentSlide - 1);
    });
  }

  private showSlide(index: number): void {
    if (index < 0) {
      this.currentSlide = this.slides.length - 1;
    } else if (index >= this.slides.length) {
      this.currentSlide = 0;
    } else {
      this.currentSlide = index;
    }

    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none';
    }

    this.slides[this.currentSlide].style.display = 'block';
  }

}

*/
