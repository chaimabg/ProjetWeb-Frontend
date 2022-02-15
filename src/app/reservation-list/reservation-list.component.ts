import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ReservationService} from '../services/reservation.service';
import {Reservation} from '../models/Reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
id:any;
  reservations: Reservation[] = [];
  constructor(http: HttpClient, private router: Router, private route: ActivatedRoute, private reservationService: ReservationService) { }
  getReservations(id:any): void{
    this.reservationService.getReservations(id).subscribe(reservations => {
        this.reservations = reservations;
      },
      error => {});
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params._id;
    this.getReservations(this.id);
  }

}
