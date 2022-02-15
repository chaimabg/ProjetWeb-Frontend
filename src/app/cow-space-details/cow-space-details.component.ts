import {Component, OnInit} from '@angular/core';
import {Space} from '../models/Space';
import {SpaceService} from '../services/space.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ReservationService} from '../services/reservation.service';
import {Loader} from '@googlemaps/js-api-loader';
import {User} from '../models/User';
import {UserService} from '../services/user.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddEventComponent} from '../add-event/add-event.component';
import {EventService} from '../services/event.service';


@Component({
  selector: 'app-cow-space-details',
  templateUrl: './cow-space-details.component.html',
  styleUrls: ['./cow-space-details.component.css']
})
export class CowSpaceDetailsComponent implements OnInit {
  space!: Space;
  id!: string;
  all: any;
  null: any;
  tab: any [] = [];
  error: any;
  reserved: any;
  user!: User;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient,
              private router: Router, private spaceService: SpaceService, private reservationService: ReservationService
    , private userService: UserService, config: NgbRatingConfig, private dialog: MatDialog,
              private eventService: EventService) {
    this.user = this.userService.getConnectedUser();
    config.max = 5;
  }

  get form() {
    return this.ReservationForm.controls;
  }

  public ReservationForm = this.fb.group({
    date: ['', [Validators.required]],
    time: ['', [Validators.required]],
    guests: ['', [Validators.required]],
    number: [''],
    AllSpace: ['']
  });


  submit(): void {
    const data = {
      date: this.ReservationForm.value.date.concat(new String('T18:20:00.000+00:00')),
      time: new String('2021-04-18T').concat(this.ReservationForm.value.time.toString()),
      guests: this.ReservationForm.value.guests,
      NumberOfHours: this.null,
      AllSpace: this.all,
      spaceId: this.space._id
    };
    this.reservationService.createReservation(data).subscribe(res => {
      this.router.navigateByUrl('/paymentPage').then(r => {
      });
    }, (err: any) => {
      this.error = err;
    });
  }

  idd!: string;

  ngOnInit(): void {
    this.idd = this.route.snapshot.params._id;
    this.getSpace(this.route.snapshot.params._id);
  }

  getSpace(id: string): void {
    this.spaceService.getSpace(id).subscribe(data => {
      console.log(data);
      this.space = data;
      const loader = new Loader({
        apiKey: 'AIzaSyBxv6MiH_nXVIsFUzmX5txEET91Ax7trRU'
      });
    });
  };

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {spaceID: this.space._id};
    dialogConfig.height = '650px';
    dialogConfig.width = '500px';
    const dialogRef = this.dialog.open(AddEventComponent, dialogConfig);
    dialogRef.afterClosed().subscribe();
  }

}
