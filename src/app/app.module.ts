import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddShipmentComponent } from './components/shipment-layout/add-shipment/add-shipment.component';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerEditComponent } from './components/customer-layout/customer-edit/customer-edit.component';
import { HttpClientModule} from "@angular/common/http";
import { CustomerListComponent } from './components/customer-layout/customer-list/customer-list.component';
import { CustomerComponent } from './components/customer-layout/customer/customer.component';
import { ShipmentComponent } from './components/shipment-layout/shipment/shipment.component';
import { ShipmentListComponent } from './components/shipment-layout/shipment-list/shipment-list.component';
import { ShipmentSelectorComponent } from './components/shipment-layout/show-shipment-list/shipment-selector.component';
import { CustomerShipmentComponent } from './components/customer-layout/customer-shipment/customer-shipment.component';
import { TrackingComponent } from './components/tracking-layout/tracking/tracking.component';
import { TrackingListComponent } from './components/tracking-layout/tracking-list/tracking-list.component';
import { TrackingEditComponent } from './components/tracking-layout/tracking-edit/tracking-edit.component';
import { ShipmentByTrackingComponent } from './components/shipment-layout/shipment-by-tracking/shipment-by-tracking.component';
import { ShipmentTrackingListComponent } from './components/shipment-layout/shipment-tracking-list/shipment-tracking-list.component';
import {ShipmentPageComponent} from './components/shipment-page/shipment-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AddShipmentComponent,
    ValidationErrorsComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerComponent,
    ShipmentComponent,
    ShipmentListComponent,
    ShipmentSelectorComponent,
    CustomerShipmentComponent,
    TrackingComponent,
    TrackingListComponent,
    TrackingEditComponent,
    ShipmentByTrackingComponent,
    ShipmentTrackingListComponent,
    ShipmentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
