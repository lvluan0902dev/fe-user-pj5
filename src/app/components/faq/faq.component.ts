import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Faq } from 'src/app/models/faq/faq.model';
import { FaqService } from 'src/app/services/faq/faq.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  public url = environment.url + '/';
  public faqs: Faq[] = [];

  constructor(
    private title: Title,
    private faqService: FaqService
  ) {
    this.title.setTitle('Câu hỏi thường gặp');
  }

  ngOnInit(): void {
    this.getAllFaq();
  }

  public getAllFaq() {
    this.faqService.getAllFaq().subscribe((response) => {
      if (response.success == 1) {
        this.faqs = response.data;
      }
    });
  }
}
