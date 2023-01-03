import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  public cartItem: any;
  public totalPrice: number = 0;
  public form = this.fb.group({
    full_name: ['', Validators.required],
    address: ['', Validators.required],
    phone_number: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  public submitted: boolean = false;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private title: Title,
    private router: Router,
  ) {
    this.title.setTitle('Đặt hàng');
  }

  ngOnInit(): void {
    this.getCartItem();
    this.getTotalPrice();
  }

  private getCartItem() {
    this.cartItem = this.cartService.getCart();
  }

  private getTotalPrice() {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  public submit() {
    this.submitted = true;
    if (this.form.status == 'VALID') {
      // var formData = new FormData();
      var data = this.form.value as any;
      // for (let key of Object.keys(data)) {
      //   if (data[key] == null || data[key] == '') {
      //     formData.append(key, '');
      //   } else {
      //     formData.append(key, data[key]);
      //   }
      // }

      // let cart = [];

      // if (localStorage.getItem('cart')) {
      //   cart = JSON.parse(localStorage.getItem('cart') || '{}');
      // }

      // formData.append('cart', cart);

      this.cartService.order(data).subscribe((response) => {
        if (response.success == 1) {
          alert(response.message);
          this.router.navigateByUrl('/');
        } else {

        }
      });
    }
  }
}
