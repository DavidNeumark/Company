import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { CouponType } from '../../common/CouponType';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-get-coupon-by-type',
  templateUrl: './get-coupon-by-type.component.html',
  styleUrls: ['./get-coupon-by-type.component.css']
})
export class GetCouponByTypeComponent implements OnInit {

  public _coupons: Coupon[] = new Array;

  public coupon: Coupon;

  public type : CouponType;

  // public name : CouponType;
  
  public couponToGet: Coupon = new Coupon();

  public listOfTypes = [
    {id:1, type: ''},
    {id:2, type: 'RESTAURANTS' },
    {id:3, type: 'ELECTRICITY' },
    {id:4, type: 'FOOD' },
    {id:5, type: 'HEALTH' },
    {id:6, type: 'SPORTS' },
    {id:7, type: 'CAMPING' },
    {id:8, type: 'TRAVELLING' },
   ];

  constructor(private myWeb: ClientServiceService) {  }

  ngOnInit() { }

  buttonClickedGetCouponByType()
  {
    
    var self = this;
    
this.myWeb.getCouponByType(this.couponToGet.type).subscribe(
  

  function(coupons)
  {
    if (self._coupons.length === 0) {
  
      for(let c of coupons)
    {
      self._coupons.push(c);
    }
    }
    
    // console.log(self._coupons);
    
    }
  
    );
    // console.log(self.couponToGet.type);
    this.couponToGet = new Coupon();
    this._coupons = new Array;
}

}  