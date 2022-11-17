import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var themeInit: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    themeInit();
  }

  ngOnInit(): void {
  }

}
