import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shipment} from "../../model/shipment/shipment";
import {CustomerName} from "../../model/customerName/customerName";
import {Tracking} from "../../model/tracking/tracking";
import set = Reflect.set;

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  private baseUrl = '/api';
  constructor(private http: HttpClient) { }

  getShipmentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/shipment/`);
  }

  getTrackingByShipmentId(shipmentId: number): Observable<any> {
    return this.http.get( `${this.baseUrl}/shipment/${shipmentId}` );
  }
  createTrackingByShipmentId(tracking:Tracking, shipmentId:number):Observable<Tracking>{
  //  const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  return this.http.post<Tracking>(`${this.baseUrl}/shipments/${shipmentId}/trackings`,tracking /*,{headers:myHeaders}*/);}



  getCustomernameAndShipmentDescription(shipmentId:number): Observable<CustomerName> {
    return this.http.get<CustomerName>(`${this.baseUrl}/shipments/${shipmentId}`);
  }

  getTrackingListByShipmentId(shipmentId:number):Observable<Tracking[]>{
    return this.http.get<Tracking[]>(`${this.baseUrl}/shipment/${shipmentId}`);
  }


}
