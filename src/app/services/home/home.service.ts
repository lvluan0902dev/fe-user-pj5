import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

const httpOptions = {
  headers: new HttpHeaders({
  })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private httpService: HttpService
  ) { }

  public getAllSlider() {
    return this.httpService.get('front/get-all-slider', httpOptions);
  }

  public getAllTestimonial() {
    return this.httpService.get('front/get-all-testimonial', httpOptions);
  }

  public getAllBeautyImage() {
    return this.httpService.get('front/get-all-beauty-image', httpOptions);
  }

  public getProductsLatest() {
    return this.httpService.get('front/get-products-latest', httpOptions);
  }

  public getMostViewedProducts() {
    return this.httpService.get('front/get-most-viewed-products', httpOptions);
  }

  public getSomeBlogs() {
    return this.httpService.get('front/get-some-blogs', httpOptions);
  }
}