import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {Space} from '../models/Space';
import {AuthUserDto} from '../user/dto/auth-user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlUser = 'http://localhost:3000/users';
  private urlAuth = 'http://localhost:3000/auth';
  constructor(private http: HttpClient, private router: Router) {
  }

  getConnectedUser(): any{
  }
  getToken(): any {
    return JSON.parse(localStorage.getItem('token') as string);
  }

  setToken(token: string): void {
    localStorage.setItem('token', JSON.stringify(token));
  }
  login(user: AuthUserDto): any {
    return this.http.post(`${this.urlAuth}`, user);
  }
  register(user: any): any{
    return this.http.post(`${this.urlUser}`, user);
  }
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/').then(() => {
      window.location.reload();
    });
  }
  update(user: User): any {
    this.http.patch(`${this.urlUser}/${user._id}`, user).toPromise().then((result) => console.log(result));
  }
  updatePassword(userId: string, newPwd: string): any{
    return this.http.patch(`${this.urlUser}/${userId}`, newPwd);
  }
  sendPwdVerificationMail(email: string): any{
    return this.http.post(`${this.urlUser}/sendMail`, email);
  }
  verifyToken(resetToken: string): any{
    return this.http.post(`${this.urlUser}/verifyToken`, resetToken);
  }
  getUserSpaces(id: any): Observable<Space[]> {
    return this.http.get<Space[]>(`${this.urlUser}/spaces/${id}`);
  }
}



