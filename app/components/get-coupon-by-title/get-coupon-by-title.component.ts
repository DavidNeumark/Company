import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-get-coupon-by-title',
  templateUrl: './get-coupon-by-title.component.html',
  styleUrls: ['./get-coupon-by-title.component.css']
})
export class GetCouponByTitleComponent implements OnInit {

  public _coupons: Coupon[] = [ ];

  public couponToGet: Coupon = new Coupon();

  constructor(private myWeb: ClientServiceService) { this.listOfCoupons(); }

  ngOnInit() {
  }
  
  getCoupon()
  {
    this.myWeb.getCoupon(this.couponToGet.id).subscribe(
      function(response)
      {
          // console.log(response);
      }
    );
  }

public listOfCoupons()
{
  const self = this;
  this.myWeb.getAllCoupons().subscribe(
  
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
  
    )
}

setCoupon(coupon: Coupon)
{
  this.couponToGet = coupon;
}


}