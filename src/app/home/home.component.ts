import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Space} from '../models/Space';
import {SpaceService} from '../services/space.service';
import {User} from '../models/User';
import {Review} from '../models/Review';
import {ReviewService} from '../services/review.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {EventService} from '../services/event.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  spaces: Space[] = [];
  user!: User;
  reviews: Review[] = [];
  events: any;
  constructor(private userService: UserService, private spaceService: SpaceService,
              private reviewService: ReviewService, config: NgbRatingConfig, private eventService: EventService) {
    config.max = 5;
  }
  getSpaces(): void{
    this.spaceService.getSpaces().subscribe((spaces: Space[]) => {
        this.spaces = spaces.slice(0, 4);
      },
        (error: any) => {
        console.log(error);
      });
  }
  getReviews(): void{
    this.reviewService.getReviews().subscribe(reviews => {
        this.reviews = this.reviewService.modifyReview(reviews);
      },
      error => {
        console.log(error);
      });

  }

  ngOnInit(): void {
    this.getReviews();
    this.getSpaces();
    this.eventService.getEvents().subscribe(events =>
      this.events = events
    );
  }

}
