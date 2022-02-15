import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ForgetPassComponent} from '../../forget-pass/forget-pass.component';
import {AuthUserDto} from '../dto/auth-user.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private fb: FormBuilder, private http: HttpClient,
              private router: Router, private userService: UserService, private dialog: MatDialog) {
  }

  get form() {
    return this.loginForm.controls;
  }

  public loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  error!: string;

  ngOnInit(): void {
    const userConnected = this.userService.getConnectedUser();
    if (userConnected !== null) {
      this.router.navigateByUrl('/').then(r => {
      });
    }
  }

  onSubmit(): void {
    const user: AuthUserDto = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.userService.login(user).subscribe((msg: any) =>  {
      this.userService.setToken(msg.token);
      this.router.navigateByUrl('/').then(r => {
        window.location.reload();
      });
    }, (err: any) => {
      this.error = err.error.message;
    });
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '550px';
    dialogConfig.width = '550px';

    const dialogRef = this.dialog.open(ForgetPassComponent, dialogConfig);
    dialogRef.afterClosed().subscribe();
  }
}
