import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackToTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
