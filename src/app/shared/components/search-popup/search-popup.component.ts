import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-search-popup',
  templateUrl: './search-popup.component.html',
  styleUrls: ['./search-popup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPopupComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public search(searchInput: any) {
    this.router.navigate(['cua-hang'], {
      queryParams: {
        search: searchInput
      }
    })
    $("button.mfp-close").click();
  }
}
