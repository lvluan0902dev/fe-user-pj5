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
}
