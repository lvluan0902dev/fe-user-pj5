import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cua-hang',
    component: ShopComponent
  },
  {
    path: 'gioi-thieu',
    component: AboutUsComponent
  },
  {
    path: 'lien-he',
    component: ContactUsComponent
  },
  {
    path: 'cau-hoi-thuong-gap',
    component: FaqComponent
  },
  {
    path: 'san-pham/:url',
    component: ProductDetailsComponent
  },
  {
    path: 'bai-viet',
    component: BlogComponent
  },
  {
    path: 'bai-viet/:url',
    component: BlogDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
