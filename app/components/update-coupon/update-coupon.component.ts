import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  public couponToUpdate: Coupon = new Coupon();

  public _coupons: Coupon[] = [ ];

  constructor(private myWeb: ClientServiceService) { this.listOfCoupons(); }

  ngOnInit() {
  }
  updateCoupon()
  {
    this.myWeb.updateCoupon(this.couponToUpdate).subscribe(
      function(response)
      {
          // console.log(response);
      }
    );
    this.couponToUpdate = new Coupon();
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
  this.couponToUpdate = coupon;
}

}