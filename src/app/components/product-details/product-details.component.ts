import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { CartService } from 'src/app/services/cart/cart.service';
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
  public form = this.fb.group({
    product_id: 0,
    product_option_id: -1,
    quantity: 1
  });

  public productsRelated: Product[] = [];
  private s_product_related_slicked: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private shopService: ShopService,
    private cartService: CartService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.title.setTitle('Mỹ phẩm');
  }

  ngAfterViewChecked(): void {
    if (!this.s_product_image_1_slicked && this.product) {
      $(".s-product-image-1").slick("unslick");
      $(".s-product-image-1").slick({ "slidesToShow": 1, "vertical": true, "autoplay": false, "dots": false, "arrows": false, "asNavFor": ".slider-nav", "responsive": [{ "breakpoint": 1200, "settings": { "vertical": false } }] });
      this.s_product_image_1_slicked = true;
    }

    if (!this.s_product_image_2_slicked && this.product) {
      $(".s-product-image-2").slick("unslick");
      $(".s-product-image-2").slick({ "slidesToShow": 4, "vertical": true, "autoplay": false, "dots": false, "arrows": false, "asNavFor": ".slider-for", "focusOnSelect": true, "responsive": [{ "breakpoint": 1200, "settings": { "vertical": false } }] });
      this.s_product_image_2_slicked = true;
    }

    if (!this.s_product_related_slicked && this.productsRelated) {
      $(".s-product-related").slick("unslick");
      $(".s-product-related").slick({ "slidesToShow": 4, "dots": false, "arrows": false, "responsive": [{ "breakpoint": 1368, "settings": { "arrows": false, "dots": false } }, { "breakpoint": 1200, "settings": { "slidesToShow": 3, "arrows": false, "dots": false } }, { "breakpoint": 992, "settings": { "slidesToShow": 2, "arrows": false, "dots": false } }, { "breakpoint": 768, "settings": { "slidesToShow": 2, "arrows": false, "dots": false } }, { "breakpoint": 576, "settings": { "slidesToShow": 1, "arrows": false, "dots": false } }] });
      this.s_product_related_slicked = true;
    }
  }

  ngAfterViewInit(): void {
    themeInit();
  }

  ngOnInit(): void {
    this.productUrl = this.activatedRoute.snapshot.paramMap.get('url');
    this.getProduct();
    this.getProductsRelated();
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

  public addToCart() {
    this.form.value.product_id = this.product.id;
    if (Number($("#quantity").val()) == 0) {
      this.form.value.quantity = 1;
    } else {
      this.form.value.quantity = Number($("#quantity").val());
    }

    let product_option = null;

    if (this.form.value.product_option_id == -1) {
      this.form.value.product_option_id = null;
      product_option = {
        option_name: this.product.option_name,
        option_price: this.product.option_price,
      }
    } else {
      let product_option_id = this.form.value.product_option_id;
      let product_option_temp = this.product.product_options.find(function (product_option_find) {
        return product_option_find.id == product_option_id;
      })

      product_option = {
        option_name: product_option_temp?.name,
        option_price: product_option_temp?.price,
      }
    }

    // this.cartService.addToCart(this.form.value).subscribe((response) => {
    //   if (response.success == 1) {
    //     this.router.navigateByUrl('/gio-hang');
    //   } else {
    //     alert(response.message);
    //   }
    // })



    this.cartService.addToCart(this.form.value, this.product, product_option);
    this.router.navigateByUrl('/gio-hang');
  }

  public minusItem() {
    if (Number($("#quantity").val()) > 1) {
      this.form.value.quantity = Number($("#quantity").val()) - 1;
    } else {
      this.form.value.quantity = 1;
    }
  }

  public plusItem() {
    this.form.value.quantity = Number($("#quantity").val()) + 1;
  }

  /**
   * 
   * @param id - product option id
   */
  public setQuantity(id: number) {
    $("#quantity").val(this.form.value.quantity);
    this.form.value.product_option_id = id;
  }

  private getProductsRelated() {
    this.shopService.getProductsRelated(this.productUrl).subscribe((response) => {
      if (response.success == 1) {
        this.productsRelated = response.data;
        this.s_product_related_slicked = false;
      }
    });
  }
}
