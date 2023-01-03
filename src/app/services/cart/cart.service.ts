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

  // public addToCart(data: any) {
  //   let key = localStorage.getItem('key');
  //   if (!key) {
  //     key = this.randomKey(20);
  //     localStorage.setItem('key', key);
  //   }
  //   let payload = {
  //     product_id: data.product_id,
  //     product_option_id: data.product_option_id,
  //     quantity: data.quantity
  //   };
  //   return this.httpService.post('front/add-to-cart/' + key, payload, httpOptions);
  // }

  public addToCart(data: any, product: any, product_option: any) {
    let cart = [];

    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart') || '{}');
    }

    cart.push({
      product_id: data.product_id,
      product_option_id: data.product_option_id,
      quantity: data.quantity,
      product_name: product.name,
      option_name: product_option.option_name,
      option_price: product_option.option_price,
      image_name: product.image_name,
      image_path: product.image_path
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    
    return true;
  }

  private randomKey(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   * 
   * @param id - item id
   */
  public removeItem(id: any) {
    return this.httpService.delete('front/remove-item/' + id, httpOptions);
  }

  /**
   * 
   * @param id - item id
   */
  public minusItem(id: any) {
    let payload = null;
    return this.httpService.post('front/minus-item/' + id, payload, httpOptions);
  }

  /**
   * 
   * @param id - item id
   */
  public plusItem(id: any) {
    let payload = null;
    return this.httpService.post('front/plus-item/' + id, payload, httpOptions);
  }

  /**
   * 
   * @param quantity 
   * @param id - item id
   */
  public changeQuantity(quantity: any, id: any) {
    let payload = {
      quantity: quantity
    };

    return this.httpService.post('front/change-quantity/' + id, payload, httpOptions);
  }

  public getTotalPrice() {
    let key = localStorage.getItem('key');
    return this.httpService.get('front/get-cart-total-price/' + key, httpOptions);
  }

  public order(data: any) {
    let payload = data;
    return this.httpService.post('front/cart-order', payload, httpOptions);
  }
}
