import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
