import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SafeHtmlPipe } from './handlers/safe-html/safe-html.pipe';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqComponent } from './components/faq/faq.component';
import { PaginatorModule } from 'primeng/paginator';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { CartManageComponent } from './components/cart-manage/cart-manage.component';
import { OrderComponent } from './components/order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    AboutUsComponent,
    SafeHtmlPipe,
    ContactUsComponent,
    FaqComponent,
    ProductDetailsComponent,
    BlogComponent,
    BlogDetailsComponent,
    CartManageComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ToastModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PaginatorModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
