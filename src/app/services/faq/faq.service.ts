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
export class FaqService {

  constructor(
    private httpService: HttpService
  ) { }

  public getAllFaq() {
    return this.httpService.get('front/get-all-faq', httpOptions);
  }
}
