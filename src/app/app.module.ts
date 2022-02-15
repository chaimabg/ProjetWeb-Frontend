import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ValidateEqualModule } from 'ng-validate-equal';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CoworkingSpacesListComponent } from './coworking-spaces-list/coworking-spaces-list.component';
import { CoworkingspaceItemComponent } from './coworkingspace-item/coworkingspace-item.component';
import { CowSpaceDetailsComponent } from './cow-space-details/cow-space-details.component';

import { AddSpaceComponent } from './add-space/add-space.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {UserService} from './services/user.service';
import {ForgetPassComponent} from "./forget-pass/forget-pass.component";

import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


import { ResetPassComponent } from './forget-pass/reset-pass/reset-pass.component';

import { SpaceItemComponent } from './space-item/space-item.component';

import { EditSpaceComponent } from './edit-space/edit-space.component';

import { PaymentPageComponent } from './payment-page/payment-page.component';


import { EditPasswordComponent } from './edit-password/edit-password.component';
import {PayementComponent} from './payement/payement.component';
import { ReservationItemComponent } from './reservation-item/reservation-item.component';
import {AddEventComponent} from './add-event/add-event.component';
import {EventComponent} from './event/event.component';


@NgModule({
  declarations: [
    AppComponent,
    CowSpaceDetailsComponent,
    LoginComponent,
    RegisterComponent,
    CoworkingSpacesListComponent,
    CoworkingspaceItemComponent,
         CowSpaceDetailsComponent,
    NavbarComponent,
    FooterComponent,
    AddSpaceComponent,
    PaymentPageComponent,
    PayementComponent,
    ReservationItemComponent,
    AddEventComponent,
    EventComponent,
    NavbarComponent,
    FooterComponent,
    UserProfileComponent,


    SpaceItemComponent,

    ForgetPassComponent,
    ResetPassComponent,
    EditPasswordComponent,

    PayementComponent,
    ReservationListComponent,

    EditSpaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    ValidateEqualModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatDialogModule,
    NgxPaginationModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
