import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var themeInit: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    themeInit();
  }

  ngOnInit(): void {
  }

}
