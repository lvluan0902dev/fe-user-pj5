import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OtherComponent } from './components/other/other.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchPopupComponent } from './components/search-popup/search-popup.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ModalSignInComponent } from './components/modal-sign-in/modal-sign-in.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    OtherComponent,
    BackToTopComponent,
    SidebarComponent,
    SearchPopupComponent,
    SidenavComponent,
    ModalSignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    OtherComponent,
    BackToTopComponent,
    SidebarComponent,
    SearchPopupComponent,
    SidenavComponent,
    ModalSignInComponent
  ]
})
export class SharedModule { }
