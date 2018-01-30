import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  public newCoupon: Coupon = new Coupon();

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

  constructor(private myWeb: ClientServiceService) { }

  ngOnInit() {
  }

  createCoupon()
  {
    
    this.myWeb.createCoupon(this.newCoupon).subscribe(
      // function(response)
      // {
      //     console.log(response);
      // }
    );
    this.newCoupon = new Coupon();
  }


}