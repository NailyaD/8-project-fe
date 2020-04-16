import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerShipmentsComponent } from './customer-shipments.component';

describe('CustomerShipmentComponent', () => {
  let component: CustomerShipmentsComponent;
  let fixture: ComponentFixture<CustomerShipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerShipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
