import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/services/contact-us/contact-us.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });
  public submitted: boolean = false;
  public successMessage: string = '';
  public errorMessage: string = '';

  constructor(
    private contactUsService: ContactUsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public registerNotificationEmail() {
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

      this.contactUsService.registerNotificationEmail(formData).subscribe((response) => {
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
