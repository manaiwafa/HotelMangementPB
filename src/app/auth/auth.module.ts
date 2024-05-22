import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbInputModule, NbSelectModule, NbStepperModule} from "@nebular/theme";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {RequestPasswordComponent} from "./request-password/request-password.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {AddHotelComponent} from "./register/add-hotel/add-hotel.component";
import {AddUserComponent} from "./register/add-user/add-user.component";
import {SummaryComponent} from "./register/summary/summary.component";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    RequestPasswordComponent,
    ResetPasswordComponent,
    AddHotelComponent,
    AddUserComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    NbStepperModule,
    NbCardModule,
    NbCheckboxModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbDatepickerModule
  ]
})
export class AuthModule {
}
