import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

const httpOptions = {
  headers: new HttpHeaders({
  })
};

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(
    private httpService: HttpService
  ) { }

  public getAllProductCategory() {
    return this.httpService.get('front/get-all-product-category', httpOptions);
  }

  public getAllProductBrand() {
    return this.httpService.get('front/get-all-product-brand', httpOptions);
  }

  public shop(data: any) {
    // if (data.sortField == undefined || data.sortField == '') {
    //   data.sortOrder = 0;
    // }

    let payload = {
      first_row: data.first,
      per_page: data.rows == undefined ? 0 : data.rows,
      product_category_id: data.product_category_id,
      product_brand_id: data.product_brand_id
      // sort_field: data.sortField == undefined ? '' : data.sortField,
      // sort_type: data.sortOrder == 1 ? 'ASC' : 'DESC',
      // search: data.searchInput
    };

    return this.httpService.post('front/shop', payload, httpOptions);
  }
}