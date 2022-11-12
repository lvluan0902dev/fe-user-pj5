import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SafeHtmlPipe } from './handlers/safe-html/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    AboutUsComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
