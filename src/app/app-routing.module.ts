import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'ReservationList/:_id', component: ReservationListComponent},
 /* {path: 'coworkingspaces', component: CoworkingSpacesListComponent},
  {path: 'coworkingspace/:_id', component:  CowSpaceDetailsComponent},
  {path: 'profile', component:  UserProfileComponent},
  {path: 'addSpace', component: AddSpaceComponent},
  {path: 'EditSpace/:_id', component: EditSpaceComponent},
  {path: 'ReservationList/:_id', component: ReservationListComponent},
  {path: '', component: HomeComponent},
  {path: '404NOTFOUND', component: PageNotFoundComponent},
  {path: 'payment', component: PaymentPageComponent},
  {path: 'paymentPage', component: PayementComponent},
  {path: 'resetPassword/:token', component: ResetPassComponent}*/
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
