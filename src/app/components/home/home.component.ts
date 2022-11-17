import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BeautyImage } from 'src/app/models/beauty-image/beauty-image.model';
import { Slider } from 'src/app/models/slider/slider.model';
import { Testimonial } from 'src/app/models/testimonial/testimonial.model';
import { HomeService } from 'src/app/services/home/home.service';
import { environment } from 'src/environments/environment';

declare var $: any;
declare var themeInit: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public url = environment.url + '/';
  public sliders: Slider[] = [];
  public testimonials: Testimonial[] = [];
  public beautyImages: BeautyImage[] = [];

  constructor(
    private title: Title,
    private homeService: HomeService
  ) {
    this.title.setTitle('Trang chủ');
  }

  ngAfterViewInit(): void {
    themeInit();
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
