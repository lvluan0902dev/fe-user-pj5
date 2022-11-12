import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
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
    return this.httpService.get('front/get-all-slider');
  }
}
