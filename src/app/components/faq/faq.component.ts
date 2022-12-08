import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Faq } from 'src/app/models/faq/faq.model';
import { FaqService } from 'src/app/services/faq/faq.service';
import { environment } from 'src/environments/environment';

declare var themeInit: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, AfterViewInit, AfterContentInit {
  public url = environment.url + '/';
  public faqs: Faq[] = [];

  constructor(
    private title: Title,
    private faqService: FaqService
  ) {
    this.title.setTitle('Câu hỏi thường gặp');
  }
  
  ngAfterContentInit(): void {
    themeInit();
  }

  ngAfterViewInit(): void {
    // themeInit();
  }

  ngOnInit(): void {
    this.getAllFaq();
  }

  private getAllFaq() {
    this.faqService.getAllFaq().subscribe((response) => {
      if (response.success == 1) {
        this.faqs = response.data;
      }
    });
  }
}
