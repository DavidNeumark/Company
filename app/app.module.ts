import { GetCouponByTitleComponent } from './components/get-coupon-by-title/get-coupon-by-title.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientServiceService } from './services/client-service.service';
import { GetAllCouponsComponent } from './components/get-all-coupons/get-all-coupons.component';
import { GetCouponComponent } from './components/get-coupon/get-coupon.component';
import { GetCouponByTypeComponent } from './components/get-coupon-by-type/get-coupon-by-type.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';
import { GetCouponByPriceComponent } from './components/get-coupon-by-price/get-coupon-by-price.component';
import { GetCouponByDateComponent } from './components/get-coupon-by-date/get-coupon-by-date.component';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCouponComponent,
    GetAllCouponsComponent,
    GetCouponByDateComponent,
    GetCouponByPriceComponent,
    GetCouponByTitleComponent,
    GetCouponByTypeComponent,
    GetCouponComponent,
    UpdateCouponComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot([
      {
        path:'Home',
        component: HomeComponent

      },

      {
        path:'getAllCoupons',
        component: GetAllCouponsComponent

      },

      {
        path:'getCoupon',
        component: GetCouponComponent

      },

      {
        path:'getCouponByType',
        component: GetCouponByTypeComponent

      },

      {
        path:'getCouponByPrice',
        component: GetCouponByPriceComponent

      },

      {
        path:'getCouponByDate',
        component: GetCouponByDateComponent

      },

      {
        path:'getCouponByTitle',
        component: GetCouponByTitleComponent

      },
    

      {
        path:'createCoupon',
        component: CreateCouponComponent

      },

      {
        path:'updateCoupon',
        component: UpdateCouponComponent

      },
    ])
  ],
  providers: [ClientServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
