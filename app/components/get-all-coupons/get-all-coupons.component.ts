import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { ClientServiceService } from '../../services/client-service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {

  public _coupons: Coupon[] = [ ];
    
  constructor(private myWeb: ClientServiceService) { }
 
  public couponToDelete: Coupon = new Coupon();

  ngOnInit() { this.buttonClicked() }

buttonClicked()
{
    var self = this;
this.myWeb.getAllCoupons().subscribe(

function(coupons)
{
  for(let c of coupons)
{
    // console.log(c)
}
  self._coupons = coupons;
}

  )

}

deleteFieldValue(index: number) 
{
  const c = confirm('Are you sure you want to delete ' + this._coupons[index].title+ '?');
    if(c){
  // console.log(this._coupons[index]);
  this.deleteCoupon(this._coupons[index]);
  this._coupons.splice(index, 1);
}else{
  alert("The Coupon was not deleted!");
}
}


deleteCoupon(coupon: Coupon)
  {
    
    this.myWeb.deleteCoupon(coupon).subscribe(
      function(response)
      {
          // console.log(response);
      }
    );
  }

}