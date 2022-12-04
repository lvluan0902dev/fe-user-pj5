import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { ShopService } from 'src/app/services/shop/shop.service';
import { environment } from 'src/environments/environment';

declare var $: any;
declare var themeInit: any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  public url = environment.url + '/';
  private productUrl: any;
  public product!: Product;
  private s_product_image_1_slicked: boolean = false;
  private s_product_image_2_slicked: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private shopService: ShopService
  ) {
    this.title.setTitle('Sản phẩm');
  }

  ngAfterViewChecked(): void {
    if (!this.s_product_image_1_slicked && this.product) {
      $(".s-product-image-1").slick("unslick");
      $(".s-product-image-1").slick({"slidesToShow": 1,"vertical":true, "autoplay":false,"dots":false,"arrows":false,"asNavFor": ".slider-nav","responsive":[{"breakpoint": 1200,"settings": {"vertical": false}}]});
      this.s_product_image_1_slicked = true;
    }

    if (!this.s_product_image_2_slicked && this.product) {
      $(".s-product-image-2").slick("unslick");
      $(".s-product-image-2").slick({"slidesToShow": 4,"vertical":true, "autoplay":false,"dots":false,"arrows":false,"asNavFor": ".slider-for","focusOnSelect": true,"responsive":[{"breakpoint": 1200,"settings": {"vertical": false}}]});
      this.s_product_image_2_slicked = true;
    }
  }

  ngAfterViewInit(): void {
    themeInit();
  }

  ngOnInit(): void {
    this.productUrl = this.activatedRoute.snapshot.paramMap.get('url');
    this.getProduct();
  }

  private getProduct() {
    this.shopService.getProduct(this.productUrl).subscribe((response) => {
      if (response.success == 1) {
        this.product = response.data;
        this.s_product_image_1_slicked = false;
        this.s_product_image_2_slicked = false;
      }
    });
  }
}
