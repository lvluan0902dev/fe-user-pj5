import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-sign-in',
  templateUrl: './modal-sign-in.component.html',
  styleUrls: ['./modal-sign-in.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalSignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
