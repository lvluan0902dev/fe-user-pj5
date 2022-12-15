import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Staff } from 'src/app/models/staff/staff.model';
import { AboutUsService } from 'src/app/services/about-us/about-us.service';
import { environment } from 'src/environments/environment';

declare var $: any;
declare var themeInit: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  public url = environment.url + '/';
  public staffs: Staff[] = [];
  private s_staff_slicked: boolean = false;

  constructor(
    private title: Title,
    private aboutUsService: AboutUsService
  ) {
    this.title.setTitle('Giới thiệu');
  }

  ngAfterViewChecked(): void {
    if (!this.s_staff_slicked && this.staffs.length) {
      $(".s-staff").slick("unslick");
      $(".s-staff").slick({"slidesToShow": 4,"dots":false,"arrows":false,"responsive":[{"breakpoint": 1200,"settings": {"slidesToShow": 3,"arrows":false,"dots":true}},{"breakpoint": 768,"settings": {"slidesToShow": 2,"arrows":false,"dots":true}},{"breakpoint": 576,"settings": {"slidesToShow": 1,"arrows":false,"dots":true}}]});
      this.s_staff_slicked = true;
    }
  }

  ngAfterViewInit(): void {
    themeInit();
  }

  ngOnInit(): void {
    this.getAllStaff();
  }

  private getAllStaff() {
    this.aboutUsService.getAllStaff().subscribe((response) => {
      if (response.success == 1) {
        this.staffs = response.data;
        this.s_staff_slicked = false;
        themeInit();
      }
    })
  }
}
