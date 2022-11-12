import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  public success(title: string, content: string) {
    this.messageService.add({ severity: 'success', summary: title, detail: content });
  }

  public info(title: string, content: string) {
    this.messageService.add({ severity: 'info', summary: title, detail: content });
  }

  public warn(title: string, content: string) {
    this.messageService.add({ severity: 'warn', summary: title, detail: content });
  }

  public error(title: string, content: string) {
    this.messageService.add({ severity: 'error', summary: title, detail: content });
  }
}
