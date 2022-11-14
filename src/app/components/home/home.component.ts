import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BeautyImage } from 'src/app/models/beauty-image/beauty-image.model';
import { Slider } from 'src/app/models/slider/slider.model';
import { Testimonial } from 'src/app/models/testimonial/testimonial.model';
import { HomeService } from 'src/app/services/home/home.service';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public url = environment.url + '/';
  public sliders: Slider[] = [];
  public testimonials: Testimonial[] = [];
  public beautyImages: BeautyImage[] = [];
  public slideConfig = {
    "slidesToShow": 1,
    "infinite": true,
    "autoplay": true,
    "dots": false,
    "arrows": false,
    "fade": true,
    "cssEase": "ease-in-out",
    "speed": 600
  };

  public slideConfig_beautyImage = {
    "slidesToShow": 5,
    "infinite": false,
    "autoplay": true,
    "dots": false,
    "arrows": false,
    "responsive": [
      { "breakpoint": 1366, "settings": { "slidesToShow": 5 } }, { "breakpoint": 992, "settings": { "slidesToShow": 4 } }, { "breakpoint": 768, "settings": { "slidesToShow": 3 } }, { "breakpoint": 576, "settings": { "slidesToShow": 2 } }]
  }

  constructor(
    private title: Title,
    private homeService: HomeService
  ) {
    this.title.setTitle('Trang chủ');
  }

  ngOnInit(): void {
    this.getAllSlider();
    this.getAllTestimonial();
    this.getAllBeautyImage();
  }

  public getAllSlider() {
    this.homeService.getAllSlider().subscribe((response) => {
      if (response.success == 1) {
        this.sliders = response.data;
      }
    });
  }

  public getAllTestimonial() {
    this.homeService.getAllTestimonial().subscribe((response) => {
      if (response.success == 1) {
        this.testimonials = response.data;
      }
    });
  }

  public getAllBeautyImage() {
    this.homeService.getAllBeautyImage().subscribe((response) => {
      if (response.success == 1) {
        this.beautyImages = response.data;
      }
    });
  }
}
