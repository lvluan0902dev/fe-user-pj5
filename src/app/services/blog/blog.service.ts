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
export class BlogService {
  constructor(
    private httpService: HttpService
  ) { }

  public getAllBlogCategory() {
    return this.httpService.get('front/get-all-blog-category', httpOptions);
  }

  public blog(data: any) {
    let payload = {
      first_row: data.first,
      per_page: data.rows == undefined ? 0 : data.rows,
      blog_category_id: data.blog_category_id,
      search: data.search
    };

    return this.httpService.post('front/blog', payload, httpOptions);
  }
}
