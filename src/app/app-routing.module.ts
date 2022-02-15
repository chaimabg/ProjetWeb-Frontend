import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ResetPassComponent } from './forget-pass/reset-pass/reset-pass.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoworkingSpacesListComponent } from './coworking-spaces-list/coworking-spaces-list.component';
import { CowSpaceDetailsComponent } from './cow-space-details/cow-space-details.component';
import { EditSpaceComponent } from './edit-space/edit-space.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { PayementComponent } from './payement/payement.component';

import { AddSpaceComponent } from './add-space/add-space.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'ReservationList/:_id', component: ReservationListComponent},
  {path: 'profile', component:  UserProfileComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'coworkingspaces', component: CoworkingSpacesListComponent},
  {path: 'coworkingspace/:_id', component:  CowSpaceDetailsComponent},
  {path: 'profile', component:  UserProfileComponent},
  {path: 'EditSpace/:_id', component: EditSpaceComponent},

  {path: 'payment', component: PaymentPageComponent},
  {path: 'paymentPage', component: PayementComponent},

  /*
  {path: '404NOTFOUND', component: PageNotFoundComponent},
  {path: '', component: HomeComponent},
  ,*/
  {path: 'resetPassword/:token', component: ResetPassComponent},

  {path: 'addSpace', component: AddSpaceComponent},
]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
