import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-get-coupon-by-date',
  templateUrl: './get-coupon-by-date.component.html',
  styleUrls: ['./get-coupon-by-date.component.css']
})
export class GetCouponByDateComponent implements OnInit {

  public _coupons: Coupon[] = [ ];

  public couponToGet: Coupon = new Coupon();

  constructor(private myWeb: ClientServiceService) {  }

  ngOnInit() {
  }
  
  
  onKeyup(date: Date)
  {
      var self = this;
  this.myWeb.getCouponByDate(date).subscribe(
  
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



  buttonClickedGetCouponByDate()
{
    var self = this;
this.myWeb.getCouponByDate(this.couponToGet.endDate).subscribe(

function(response)
{
  for(let c of response)
{
    console.log(c)
}
  self._coupons = response;
}

  );

  this.couponToGet.endDate = null;
  this._coupons = new Array;

}



}