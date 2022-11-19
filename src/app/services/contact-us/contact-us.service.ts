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
export class ContactUsService {

  constructor(
    private httpService: HttpService
  ) { }

  public getAllContactSetting() {
    return this.httpService.get('front/get-all-contact-setting', httpOptions);
  }

  public sendMessage(data: any) {
    let payload = data;
    return this.httpService.post('front/send-message', payload, httpOptions);
  }

  public registerNotificationEmail(data: any) {
    let payload = data;
    return this.httpService.post('front/register-notification-email', payload, httpOptions);
  }
}
