import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked {
  public url = environment.url + '/';
  public sliders: Slider[] = [];
  public testimonials: Testimonial[] = [];
  public beautyImages: BeautyImage[] = [];
  private s_slider_slicked: boolean = false;
  private s_testimonial_slicked: boolean = false;
  private s_beautyImage_slicked: boolean = false;

  constructor(
    private title: Title,
    private homeService: HomeService
  ) {
    this.title.setTitle('Trang chủ');
  }

  ngAfterViewChecked(): void {
    if (!this.s_slider_slicked && this.sliders.length) {
      $(".s-slider").slick("unslick");
      $(".s-slider").slick({"slidesToShow": 1,"infinite":true,"autoplay":true,"dots":false,"arrows":false,"fade":true,"cssEase":"ease-in-out","speed":600});
      this.s_slider_slicked = true;
    }
    
    if (!this.s_testimonial_slicked && this.testimonials.length) {
      $(".s-testimonial").slick("unslick");
      $(".s-testimonial").slick({"slidesToShow": 1,"infinite":true,"autoplay":true,"dots":false,"arrows":false,"fade":false,"cssEase":"ease-in-out","speed":600});
      this.s_testimonial_slicked = true;
    }

    if (!this.s_beautyImage_slicked && this.beautyImages.length) {
      $(".s-beauty-image").slick("unslick");
      $(".s-beauty-image").slick({"slidesToShow": 5,"infinite":false,"autoplay":true,"dots":false,"arrows":false,"responsive":[{"breakpoint": 1366,"settings": {"slidesToShow":5}},{"breakpoint": 992,"settings": {"slidesToShow":4}},{"breakpoint": 768,"settings": {"slidesToShow": 3}},{"breakpoint": 576,"settings": {"slidesToShow": 2}}]});
      this.s_beautyImage_slicked = true;
    }
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
        this.s_slider_slicked = false;
      }
    });
  }

  public getAllTestimonial() {
    this.homeService.getAllTestimonial().subscribe((response) => {
      if (response.success == 1) {
        this.testimonials = response.data;
        this.s_testimonial_slicked = false;
      }
    });
  }

  public getAllBeautyImage() {
    this.homeService.getAllBeautyImage().subscribe((response) => {
      if (response.success == 1) {
        this.beautyImages = response.data;
        this.s_beautyImage_slicked = false;
      }
    });
  }
}
