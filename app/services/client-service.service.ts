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

  public getAllCoupons()
  {
    var promise = this._http.get('http://localhost:8080/Company/getAllCoupons').map(
      
      function(couponsResponse)
      {
        return couponsResponse.json() 
      }
    );
    return promise;
  }

  public getCoupon(id : number)
{
  var promise =  this._http.get('http://localhost:8080/Company/getCoupon/' + id)
  .map(
function (couponsResponse)
{
  return couponsResponse.json();
}

  );
  return promise;

}

public getCouponByType(type : CouponType)
{
  
  var promise =  this._http.get('http://localhost:8080/Company/getCouponByType/' + type)
  .map(
function (couponsResponse)
{
  return couponsResponse.json();
}

  );
  return promise;
}

public getCouponByPrice(price : number)
{
  var promise =  this._http.get('http://localhost:8080/Company/getCouponByPrice/' + price)
  .map(
function (couponsResponse)
{
  return couponsResponse.json();
}

  );
  return promise;

}

public getCouponByDate(date : Date)
{
  var promise =  this._http.get('http://localhost:8080/Company/getCouponByDate/' + date)
  .map(
function (couponsResponse)
{
  return couponsResponse.json();
}

  );
  return promise;

}

  public createCoupon(c: Coupon)
  {
    // console.log(c);
    return this._http.post('http://localhost:8080/Company/createCoupon', c);
  }

  public updateCoupon(c: Coupon)
  {
    // console.log(c);
    return this._http.put('http://localhost:8080/Company/updateCoupon', c);
  }

public deleteCoupon(c: Coupon)
{
  // console.log(c);
 return this._http.delete('http://localhost:8080/Company/deleteCoupon/', {body: c}); 
}

}
