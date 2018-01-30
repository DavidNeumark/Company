import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-get-coupon-by-price',
  templateUrl: './get-coupon-by-price.component.html',
  styleUrls: ['./get-coupon-by-price.component.css']
})
export class GetCouponByPriceComponent implements OnInit {

  public _coupons: Coupon[] = [ ];

  public couponToGet: Coupon = new Coupon();

  constructor(private myWeb:ClientServiceService) {  }

  ngOnInit() {
  }
  
  
  onKeyup(price: number)
  {
      var self = this;
  this.myWeb.getCouponByPrice(price).subscribe(
  
  function(response)
  {
    for(let c of response)
  {
      // console.log(c)
  }
    self._coupons = response;
  }
  
    );
 
  
  }



  couponByPriceClick()
{
    var self = this;
this.myWeb.getCouponByPrice(this.couponToGet.price).subscribe(

function(response)
{
  for(let c of response)
{
    // console.log(c)
}
  self._coupons = response;
}

  );

  this.couponToGet.price = null;
  this._coupons = new Array;

}


}
