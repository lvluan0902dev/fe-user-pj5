import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartItem } from 'src/app/models/cart-item/cart-item.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { environment } from 'src/environments/environment';

declare var themeInit: any;

@Component({
  selector: 'app-cart-manage',
  templateUrl: './cart-manage.component.html',
  styleUrls: ['./cart-manage.component.css']
})
export class CartManageComponent implements OnInit, AfterViewInit {
  public url = environment.url + '/';
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

  /**
   * 
   * @param id - item id
   */
  public removeItem(id: any) {
    this.cartService.removeItem(id).subscribe((response) => {
        if (response.success == 1) {
          this.getCart();
        } else {
          alert("Error");
        }
    });
  }

  /**
   * 
   * @param id - item id
   */
  public minusItem(id: any) {
    this.cartService.minusItem(id).subscribe((response) => {
      if (response.success == 1) {
        this.getCart();
      } else {
        alert("Error");
      }
    });
  }

  /**
   * 
   * @param id - item id
   */
    public plusItem(id: any) {
      this.cartService.plusItem(id).subscribe((response) => {
        if (response.success == 1) {
          this.getCart();
        } else {
          alert("Error");
        }
      });
    }
}
