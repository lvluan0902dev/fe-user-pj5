import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog/blog.model';
import { BlogService } from 'src/app/services/blog/blog.service';
import { environment } from 'src/environments/environment';

declare var themeInit: any;

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit, AfterViewInit {
  public url = environment.url + '/';
  public blog!: Blog;
  private blogUrl: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private blogService: BlogService
  ) {
    this.title.setTitle('Bài viết');
  }

  ngAfterViewInit(): void {
    themeInit();
  }

  ngOnInit(): void {
    this.blogUrl = this.activatedRoute.snapshot.paramMap.get('url');
    this.getBlog();
  }

  private getBlog() {
    this.blogService.getBlog(this.blogUrl).subscribe((response) => {
      if (response.success == 1) {
        this.blog = response.data;
      }
    })
  }
}
