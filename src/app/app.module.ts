import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReservationItemComponent } from './reservation-item/reservation-item.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ForgetPassComponent} from "./forget-pass/forget-pass.component";
import {EditPasswordComponent} from "./edit-password/edit-password.component";
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { CoworkingSpacesListComponent } from './coworking-spaces-list/coworking-spaces-list.component';
import { CoworkingspaceItemComponent } from './coworkingspace-item/coworkingspace-item.component';
import { ResetPassComponent } from './forget-pass/reset-pass/reset-pass.component';
import { PayementComponent } from './payement/payement.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { SpaceItemComponent } from './space-item/space-item.component';
import { CowSpaceDetailsComponent } from './cow-space-details/cow-space-details.component';
import { EditSpaceComponent } from './edit-space/edit-space.component';


@NgModule({
  declarations: [
    AppComponent,
    CowSpaceDetailsComponent,
    LoginComponent,
    RegisterComponent,
    CoworkingSpacesListComponent,
    CoworkingspaceItemComponent,

    NavbarComponent,
    FooterComponent,
    UserProfileComponent,

    PaymentPageComponent,

    SpaceItemComponent,

    ForgetPassComponent,
    ResetPassComponent,
    EditPasswordComponent,

    PayementComponent,
    ReservationListComponent,
    ReservationItemComponent,
    CowSpaceDetailsComponent,
    EditSpaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,

    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FormsModule,
    NgbModule,

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
