import { CouponType } from "./CouponType";


export class Coupon {
    
	constructor(public id?, public title?: string, public startDate?: Date, public endDate?: Date, public amount?: number, public type?: CouponType, public message?: string, public price?: number, public image?: string)
	{

	}

}