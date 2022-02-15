import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ValidateEqualModule} from 'ng-validate-equal';
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

import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';

import { ResetPassComponent } from './forget-pass/reset-pass/reset-pass.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import {PayementComponent} from './payement/payement.component';
import { ReservationItemComponent } from './reservation-item/reservation-item.component';
import {AddEventComponent} from './add-event/add-event.component';
import {EventComponent} from './event/event.component';
import {AddReviewComponent} from './add-review/add-review.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPassComponent,
    ResetPassComponent,
    EditPasswordComponent,
    CoworkingSpacesListComponent,
    CoworkingspaceItemComponent,
    CowSpaceDetailsComponent,
    AddSpaceComponent,
    NavbarComponent,
    FooterComponent,
    PaymentPageComponent,
    PayementComponent,
    ReservationItemComponent,
    AddEventComponent,
    EventComponent,
    AddReviewComponent,
    PageNotFoundComponent,
    HomeComponent,
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
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
