import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ResetPassComponent } from './forget-pass/reset-pass/reset-pass.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoworkingSpacesListComponent } from './coworking-spaces-list/coworking-spaces-list.component';
import { CowSpaceDetailsComponent } from './cow-space-details/cow-space-details.component';
/*import {EditSpaceComponent} from './edit-space/edit-space.component';*/
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



  /*{path: '', component: HomeComponent},
  {path: '404NOTFOUND', component: PageNotFoundComponent},
    {path: 'EditSpace/:_id', component: EditSpaceComponent},
  {path: 'payment', component: PaymentPageComponent},
  {path: 'paymentPage', component: PayementComponent},*/
  {path: 'resetPassword/:token', component: ResetPassComponent}


]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
