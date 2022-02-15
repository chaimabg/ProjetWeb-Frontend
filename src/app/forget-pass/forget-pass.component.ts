import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {

  passForm!: FormGroup ;
  email!: string;
  state!: boolean;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<ForgetPassComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private http: HttpClient) {
    this.state = false;
    this.email = data.description;
  }
 error !: string;
  ngOnInit(): void {
    this.passForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }
  get form(): any {
    return this.passForm.controls;
  }
  save(): void {
    this.userService.sendPwdVerificationMail(this.passForm.value.email);
  }


  close(): void {
    this.dialogRef.close();
  }

}
