import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlogCategory } from 'src/app/models/blog-category/blog-category.model';
import { Blog } from 'src/app/models/blog/blog.model';
import { BlogService } from 'src/app/services/blog/blog.service';
import { environment } from 'src/environments/environment';

declare var themeInit: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, AfterViewInit {
  public url = environment.url + '/';
  public blogs: Blog[] = [];
  public blogCategories: BlogCategory[] = [];
  public event: any;
  public perPage: number = 6;
  public totalResult: number = 6;
  public blog_category_id: number = 0;
  public searchValue: string = '';

  constructor(
    private title: Title,
    private blogService: BlogService
  ) {
    this.title.setTitle('Bài viết');
  }

  ngAfterViewInit(): void {
    themeInit();
  }

  ngOnInit(): void {
    this.getAllBlogCategory();
    this.event = {
      first: 0,
      rows: this.perPage,
      blog_category_id: this.blog_category_id,
      search: this.searchValue
    };

    this.loadData();
  }

  private getAllBlogCategory() {
    this.blogService.getAllBlogCategory().subscribe((response) => {
      if (response.success == 1) {
        this.blogCategories = response.data;
      }
    })
  }

  public paginate(event: any) {
    this.perPage = event.rows
    this.event = {
      first: 0,
      rows: this.perPage,
      blog_category_id: this.blog_category_id,
      search: this.searchValue
    };

    this.loadData();
  }

  private loadData() {
    this.blogService.blog(this.event).subscribe((response) => {
      this.blogs = response.data;
      this.totalResult = response.total_result;
    })
    
    themeInit();
  }

  public filterByCategory(id: any) {
    if (this.blog_category_id == id) {
      this.blog_category_id = 0;
    } else {
      this.blog_category_id = id;
    }
    
    this.event = {
      first: 0,
      rows: this.perPage,
      blog_category_id: this.blog_category_id,
      search: this.searchValue
    };

    this.loadData();
  }

  public search(searchInput: any) {
    this.searchValue = searchInput;
    
    this.event = {
      first: 0,
      rows: this.perPage,
      blog_category_id: this.blog_category_id,
      search: this.searchValue
    };

    this.loadData();
  }
}
