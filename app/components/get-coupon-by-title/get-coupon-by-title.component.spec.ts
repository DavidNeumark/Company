import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCouponByTitleComponent } from './get-coupon-by-title.component';

describe('GetCouponByTitleComponent', () => {
  let component: GetCouponByTitleComponent;
  let fixture: ComponentFixture<GetCouponByTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCouponByTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCouponByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
