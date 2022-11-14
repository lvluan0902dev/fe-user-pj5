import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  constructor(
    private title: Title,
    private homeService: HomeService
  ) {
    this.title.setTitle('Trang chủ');
  }

  ngOnInit(): void {
    this.getAllSlider();
    this.getAllTestimonial();
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
    })
  }
}
