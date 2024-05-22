import { ReservationComponent } from './pages/reservation/reservation.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import {
  NbAuthComponent, NbLogoutComponent, NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { HomeComponent } from './customer-page/home/home.component';
import { ContactComponent } from './customer-page/contact/contact.component';
import { DestinationComponent } from './customer-page/destination/destination.component';
import { ListHotelComponent } from './customer-page/list-hotel/list-hotel.component';
import { HotelDetailsComponent } from './customer-page/hotel-details/hotel-details.component';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },


  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  {
    path: 'reservation',
    component: ReservationComponent,
  },
  {
    path: 'customer',
    component: CustomerPageComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'destination',
        component: DestinationComponent,
      },
      {
        path: 'hotels',
        component: ListHotelComponent,
      },
      {
        path: 'hotels/:id',
        component: HotelDetailsComponent,
      },
    ]
  },

  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },

];

const config: ExtraOptions = {
  useHash: false,
};


@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
