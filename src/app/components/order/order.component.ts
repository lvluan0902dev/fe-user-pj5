import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item/cart-item.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public url = environment.url + '/';
  public cartItem: CartItem[] = [];
  public totalPrice: number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getCartItem();
    this.getTotalPrice();
  }

  private getCartItem() {
    this.cartService.getCart().subscribe((response) => {
      if (response.success == 1) {
        this.cartItem = response.data;
      }
    })
  }

  private getTotalPrice() {
    this.cartService.getTotalPrice().subscribe((response) => {
      if (response.success == 1) {
        this.totalPrice = response.data;
      }
    })
  }
}
