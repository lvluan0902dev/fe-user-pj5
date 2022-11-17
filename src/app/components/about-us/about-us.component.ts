import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Staff } from 'src/app/models/staff/staff.model';
import { AboutUsService } from 'src/app/services/about-us/about-us.service';
import { environment } from 'src/environments/environment';

declare var themeInit: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  public url = environment.url + '/';
  public staffs: Staff[] = [];
  public slideConfig = {
    "slidesToShow": 4,
    "dots": false,
    "arrows": false,
    "responsive":
      [{ "breakpoint": 1200, "settings": { "slidesToShow": 3, "arrows": false, "dots": true } }, { "breakpoint": 768, "settings": { "slidesToShow": 2, "arrows": false, "dots": true } }, { "breakpoint": 576, "settings": { "slidesToShow": 1, "arrows": false, "dots": true } }]
  }

  constructor(
    private title: Title,
    private aboutUsService: AboutUsService
  ) {
    this.title.setTitle('Giới thiệu');
  }

  ngAfterViewInit(): void {
    themeInit();
  }

  ngOnInit(): void {
    this.getAllStaff();
  }

  public getAllStaff() {
    this.aboutUsService.getAllStaff().subscribe((response) => {
      if (response.success == 1) {
        this.staffs = response.data;
      }
    })
  }
}
