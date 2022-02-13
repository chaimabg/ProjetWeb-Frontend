import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import { Space } from '../models/Space';
import { Observable } from 'rxjs';

import {Router} from '@angular/router';
import {Reservation} from "../models/Reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservationUrl = 'http://localhost:5000/reservations';
  constructor(private http: HttpClient, private router: Router) { }
  getSpace(id: string, date: Date ): Observable<any>{
    var data = {'id': id, 'date': date};
    console.log('fetching...');
    return this.http.post<any>('http://localhost:5000/reservations/reserv', data);
  }
  createReservation(reservation: any): Observable<any> {
    return this.http.post<Space>('http://localhost:5000/reservations', reservation);
  }
  getReservations(id:any): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.reservationUrl}/${id}`);
  }
  delete(id: any): Observable<any>{
    return this.http.delete<Reservation>(`${this.reservationUrl}/${id}`);
  }


}
