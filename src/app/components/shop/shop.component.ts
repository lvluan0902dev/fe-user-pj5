import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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
  public perPage: number = 12;
  public totalResult: number = 12;
  public product_category_id: number = 0;
  public product_brand_id: number = 0;
  public sortByPriceType: number = 0;
  public searchValue: any | null;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shopService: ShopService
  ) {
    this.title.setTitle('Cửa hàng');
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchValue = params;
      this.searchValue = this.searchValue.search;
      this.event = {
        first: 0,
        rows: this.perPage,
        sort_by_price_type: this.sortByPriceType,
        product_category_id: this.product_category_id,
        product_brand_id: this.product_brand_id,
        search: this.searchValue
      };
      this.loadData();
    })
  }

  ngAfterViewInit(): void {
    themeInit();
  }

  ngOnInit(): void {
    this.getAllProductCategory();
    this.getAllProductBrand();
    this.event = {
      first: 0,
      rows: this.perPage,
      sort_by_price_type: this.sortByPriceType,
      product_category_id: this.product_category_id,
      product_brand_id: this.product_brand_id,
      search: this.searchValue
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
    this.perPage = event.rows
    this.event = {
      first: event.first,
      rows: this.perPage,
      sort_by_price_type: this.sortByPriceType,
      product_category_id: this.product_category_id,
      product_brand_id: this.product_brand_id,
      search: this.searchValue
    }
    
    this.loadData();
  }

  private loadData() {
    this.shopService.shop(this.event).subscribe((response) => {
      this.products = response.data;
      this.totalResult = response.total_result;
    })
    
    themeInit();
  }

  public filterByBrand(id: any) {
    if (this.product_brand_id == id) {
      this.product_brand_id = 0;
    } else {
      this.product_brand_id = id;
    }

    this.event = {
      first: 0,
      rows: this.perPage,
      sort_by_price_type: this.sortByPriceType,
      product_category_id: this.product_category_id,
      product_brand_id: this.product_brand_id,
      search: this.searchValue
    };

    this.loadData();
  }

  public filterByCategory(id: any) {
    if (this.product_category_id == id) {
      this.product_category_id = 0;
    } else {
      this.product_category_id = id;
    }
    
    this.event = {
      first: 0,
      rows: this.perPage,
      sort_by_price_type: this.sortByPriceType,
      product_category_id: this.product_category_id,
      product_brand_id: this.product_brand_id,
      search: this.searchValue
    };

    this.loadData();
  }

  public sortByPrice(type: any) {
    this.sortByPriceType = type;

    this.event = {
      first: 0,
      rows: this.perPage,
      sort_by_price_type: this.sortByPriceType,
      product_category_id: this.product_category_id,
      product_brand_id: this.product_brand_id,
      search: this.searchValue
    }

    this.loadData();
  }

  public restShop() {
    this.perPage = 12;
    this.sortByPriceType = 0;
    this.product_category_id = 0;
    this.product_brand_id = 0;
    this.searchValue = null;

    this.event = {
      first: 0,
      rows: this.perPage,
      sort_by_price_type: this.sortByPriceType,
      product_category_id: this.product_category_id,
      product_brand_id: this.product_brand_id,
      search: this.searchValue
    }

    this.loadData();

    this.router.navigateByUrl('/cua-hang');
  }
}
