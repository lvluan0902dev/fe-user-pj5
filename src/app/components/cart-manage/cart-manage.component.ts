import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartItem } from 'src/app/models/cart-item/cart-item.model';
import { CartService } from 'src/app/services/cart/cart.service';

declare var themeInit: any;

@Component({
  selector: 'app-cart-manage',
  templateUrl: './cart-manage.component.html',
  styleUrls: ['./cart-manage.component.css']
})
export class CartManageComponent implements OnInit, AfterViewInit {
  public cart: CartItem[] = [];

  constructor(
    private title: Title,
    private cartService: CartService
  ) {
    this.title.setTitle('Giỏ hàng');
  }

  ngAfterViewInit(): void {
    themeInit();
  }

  ngOnInit(): void {
    this.getCart();
  }

  private getCart() {
    this.cartService.getCart().subscribe((response) => {
      if (response.success == 1) {
        this.cart = response.data;
      }
    });
  }
}
