import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContactSetting } from 'src/app/models/contact-setting/contact-setting.model';
import { ContactUsService } from 'src/app/services/contact-us/contact-us.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public url = environment.url + '/';
  public contactSettings: ContactSetting[] = [];

  constructor(
    private title: Title,
    private contactUsService: ContactUsService
  ) {
    this.title.setTitle('Liên hệ');
  }

  ngOnInit(): void {
    this.getAllContactSetting();
  }

  public getAllContactSetting() {
    this.contactUsService.getAllContactSetting().subscribe((response) => {
      if (response.success == 1) {
        this.contactSettings = response.data;
      }
    });
  }
}
