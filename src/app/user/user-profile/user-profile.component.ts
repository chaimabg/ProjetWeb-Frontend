import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Space} from '../../models/Space';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  spaces: Space[] = [];
  config = {
    id: 'custom',
    itemsPerPage: 3,
    currentPage: 1,
    totalItems: 0
  };
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private userService: UserService ) {}
  get form() { return this.editForm.controls; }
  public responsive = true;
  isLoading = true;
  public labels: any = {
    previousLabel: '<--',
    nextLabel: '-->',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  public editForm =  this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    address: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('^.{5,}$')]],
    passwordConfirmation : ['', Validators.required]
  });
  error: any;
  user: any;



  ngOnInit(): void {
    this.user = this.userService.getConnectedUser();
    this.editForm.patchValue({
      username: this.user.username,
      email: this.user.email,
      phone: this.user.phoneNumber,
      address: this.user.address,
    });
    this.getSpaces(this.user._id);
  }

  // @ts-ignore
  getSpaces(id: any): void [] {
    this.userService.getUserSpaces(id).subscribe(spaces => {
        this.spaces = spaces;
        this.config.totalItems = this.spaces.length;
        this.isLoading = false;
      },
      error  => {
        this.isLoading = true;
      });
  }

  submit(): void{
    const updatedUser = {
      username: this.editForm.value.username,
      email: this.editForm.value.email,
      address: this.editForm.value.address,
      phone: this.editForm.value.phone,
      password: this.editForm.value.password,
      _id: this.user._id
    };

    this.userService.update(updatedUser);

  }
}
