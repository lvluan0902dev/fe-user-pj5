import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductBrand } from 'src/app/models/product-brand/product-brand.model';
import { ProductCategory } from 'src/app/models/product-category/product-category.model';
import { Product } from 'src/app/models/product/product.model';
import { ShopService } from 'src/app/services/shop/shop.service';
import { environment } from 'src/environments/environment';

declare var themeInit: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, AfterViewInit {
  public url = environment.url + '/';
  public productCategories: ProductCategory[] = [];
  public productBrands: ProductBrand[] = [];
  public products: Product[] = [];
  public event: any;
  public totalResult: number = 12;
  public product_category_id: number = 0;
  public product_brand_id: number = 0;

  constructor(
    private title: Title,
    private shopService: ShopService
  ) {
    this.title.setTitle('Cửa hàng');
  }

  ngAfterViewInit(): void {
    themeInit();
  }

  ngOnInit(): void {
    this.getAllProductCategory();
    this.getAllProductBrand();
    this.event = {
      first: 0,
      rows: 12,
      product_category_id: this.product_category_id,
      product_brand_id: this.product_brand_id,
    };
    this.loadData();
  }

  private getAllProductCategory() {
    this.shopService.getAllProductCategory().subscribe((response) => {
      if (response.success = 1) {
        this.productCategories = response.data;
      }
    });
  }

  private getAllProductBrand() {
    this.shopService.getAllProductBrand().subscribe((response) => {
      if (response.success = 1) {
        this.productBrands = response.data;
      }
    });
  }

  public paginate(event: any) {
    this.event = {
      first: event.first,
      rows: event.rows,
      product_category_id: this.product_category_id,
      product_brand_id: this.product_brand_id,
    }
    
    this.loadData();

    themeInit();
  }

  private loadData() {
    this.shopService.shop(this.event).subscribe((response) => {
      this.products = response.data;
      this.totalResult = response.total_result;
    })
  }
}
