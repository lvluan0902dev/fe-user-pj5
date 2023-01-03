import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartItem } from 'src/app/models/cart-item/cart-item.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { environment } from 'src/environments/environment';

declare var $: any;
declare var themeInit: any;

@Component({
  selector: 'app-cart-manage',
  templateUrl: './cart-manage.component.html',
  styleUrls: ['./cart-manage.component.css']
})
export class CartManageComponent implements OnInit, AfterViewInit {
  public url = environment.url + '/';
  public cart: any;
  public totalPrice: number = 0;

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
    this.cart = this.cartService.getCart();
    this.getTotalPrice();
  }

  /**
   * 
   * @param index
   */
  public removeItem(index: any) {
    this.cartService.removeItem(index);
    this.getCart();
  }

  /**
   * 
   * @param index
   */
  public minusItem(index: any) {
    this.cartService.minusItem(index);
    this.getCart();
  }

  /**
   * 
   * @param quantity 
   * @param index
   */
  public changeQuantity(quantity: any, index: any) {
    if (quantity < 1 || !quantity || quantity == null) {
      $("#quantityInput" + index).val(1);
      quantity = 1;
    }

    this.cartService.changeQuantity(quantity, index);
    this.getCart();
  }

  /**
   * 
   * @param index
   */
  public plusItem(index: any) {
    this.cartService.plusItem(index);
    this.getCart();
  }

  private getTotalPrice() {
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
