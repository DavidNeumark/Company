import { Injectable } from '@angular/core';

import { CouponType } from './../common/CouponType';
import { Coupon } from './../common/Coupon';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { query } from '@angular/core/src/render3/instructions';

@Injectable()


@Injectable()
export class ClientServiceService {

  constructor(private _http: Http) { }

  public getAllCoupons() {
    const promise = this._http.get('./getAllCoupons/').map(

      (couponsResponse) => {
        return couponsResponse.json();
      }
    );
    return promise;
  }

  public getCoupon(id: number) {
  const promise =  this._http.get('./getCoupon/' + id)
  .map(
 (couponsResponse) => {
  return couponsResponse.json();
}

  );
  return promise;

}

public getCouponByType(type: CouponType) {

  const promise =  this._http.get('./getCouponByType/' + type)
  .map(
 (couponsResponse) => {
  return couponsResponse.json();
}

  );
  return promise;
}

public getCouponByPrice(price: number) {
  const promise =  this._http.get('./getCouponByPrice/' + price)
  .map(
(couponsResponse) => {
  return couponsResponse.json();
}

  );
  return promise;

}

public getCouponByDate(date: Date) {
  const promise =  this._http.get('./getCouponByDate/' + date)
  .map(
(couponsResponse) => {
  return couponsResponse.json();
}

  );
  return promise;

}

  public createCoupon(c: Coupon) {
    // console.log(c);
    return this._http.post('./createCoupon/', c);
  }

  public updateCoupon(c: Coupon) {
    // console.log(c);
    return this._http.put('./updateCoupon/', c);
  }

public deleteCoupon(c: Coupon) {
  // console.log(c);
 return this._http.delete('./deleteCoupon/', {body: c});
}

}
