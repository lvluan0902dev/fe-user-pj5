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
export class CartService {

  constructor(
    private httpService: HttpService
  ) { }

  public getCart() {
    let key = localStorage.getItem('key');
    return this.httpService.get('front/get-cart/' + key, httpOptions);
  }

  public addToCart(data: any) {
    let key = localStorage.getItem('key');
    if (!key) {
      // key = 
    }
    let payload = {
      product_id: data.product_id,
      product_option_id: data.product_option_id,
      quantity: data.quantity
    };
    return this.httpService.post('front/add-to-cart/' + key, payload, httpOptions);
  }
}
