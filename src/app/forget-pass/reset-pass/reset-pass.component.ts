import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {
  error: any;
  private resetToken: any;
  CurrentState!: string;
  userId: any;
  constructor(private fb: FormBuilder, private userService: UserService,
              private http: HttpClient, private route: ActivatedRoute, private router: Router, ) {

    this.route.params.subscribe(params => {
      this.resetToken = params.token;
      this.VerifyToken();
    });
  }

  get form() {
    return this.registerForm.controls;
  }

  // @ts-ignore
  public registerForm = this.fb.group({
    password: ['', [Validators.required, Validators.pattern('^.{5,}$')]],
    passwordConfirmation: ['', Validators.required]
  });

  ngOnInit(): void {
  }
  submit(): void {
    this.userService.updatePassword(this.userId, this.registerForm.value.password);
  }

  private VerifyToken(): void {
    this.userService.verifyToken(this.resetToken).toPromise().then((msg: any) => {
      this.error = msg.error;
      if (!this.error) {
       this.CurrentState = 'validate';
       this.userId = msg._id;
      }
    });
  }
}
