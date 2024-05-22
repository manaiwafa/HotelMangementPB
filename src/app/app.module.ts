/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbCardModule,
  NbDatepickerModule,
  NbDialogModule,
  NbLayoutModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,

} from '@nebular/theme';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from "./auth/auth.module";
import { HomeComponent } from './customer-page/home/home.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { GalleriaModule } from 'primeng/galleria';
import { FooterComponent } from './customer-page/layers/footer/footer.component';
import { GuaranteesComponent } from './customer-page/layers/guarantees/guarantees.component';
import { NavbarComponent } from './customer-page/layers/navbar/navbar.component';
import { BestHotelComponent } from './customer-page/layers/best-hotel/best-hotel.component';
import { SearchComponent } from './customer-page/layers/search/search.component';
import { AboutComponent } from './customer-page/about/about.component';
import { ContactComponent } from './customer-page/contact/contact.component';
import { DestinationComponent } from './customer-page/destination/destination.component';
import { ListHotelComponent } from './customer-page/list-hotel/list-hotel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelCardComponent } from './customer-page/hotel-card/hotel-card.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SearchRoomComponent } from './customer-page/search-room/search-room.component';
import { HotelDetailsComponent } from './customer-page/hotel-details/hotel-details.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, HomeComponent, CustomerPageComponent, NavbarComponent, SearchComponent, BestHotelComponent, FooterComponent, GuaranteesComponent, AboutComponent, ContactComponent, DestinationComponent, ListHotelComponent, HotelCardComponent, SearchRoomComponent, HotelDetailsComponent,  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    AuthModule,
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbLayoutModule,
    GalleriaModule,
    NbSelectModule,
    NbCardModule,
    ReactiveFormsModule,
    OverlayPanelModule,
    TableModule,
    DropdownModule,
    FormsModule,
    ButtonModule

  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
