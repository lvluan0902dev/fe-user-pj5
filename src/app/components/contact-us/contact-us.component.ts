import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  public form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    content: ['', [Validators.required]],
  });
  public submitted: boolean = false;
  public successMessage: string = '';
  public errorMessage: string = '';

  constructor(
    private title: Title,
    private contactUsService: ContactUsService,
    private fb: FormBuilder
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

  public sendMessage() {
    this.submitted = true;
    if (this.form.status == 'VALID') {
      var formData = new FormData();
      var data = this.form.value as any;
      for (let key of Object.keys(data)) {
        if (data[key] == null || data[key] == '') {
          formData.append(key, '');
        } else {
          formData.append(key, data[key]);
        }
      }

      this.contactUsService.sendMessage(formData).subscribe((response) => {
        if (response.success == 1) {
          this.successMessage = response.message;
          this.submitted = false;
          this.form.reset();
        } else {
          this.errorMessage = response.message;
        }
      });
    } else {
      // Do something
    }
  }
}
