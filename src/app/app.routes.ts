import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {RoomsComponent} from "./components/rooms/rooms.component";
import {NewBookingComponent} from "./components/new-booking/new-booking.component";
import {BookingListComponent} from "./components/booking-list/booking-list.component";
import {BookingCalendarComponent} from "./components/booking-calendar/booking-calendar.component";

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent, pathMatch: "full"},
  {path: 'layout', component: LayoutComponent},
  /*cambiar por login ?*/
  {path: '', component: LayoutComponent,
    children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
      {
        path: 'rooms',
        component: RoomsComponent
      },
      {
        path: 'newBooking',
        component: NewBookingComponent
      },
      {
        path: 'bookings',
        component: BookingListComponent
      },
      {
        path: 'booking-calendar',
        component: BookingCalendarComponent
      }
    ]
  }

];


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { PreciosComponent } from './components/precios/precios.component';
// import { ProtegidaComponent } from './components/protegida/protegida.component';
//
// export const ROUTES: Routes = [
//   {path: 'precios', component: PreciosComponent},
//   {path: 'home', component: HomeComponent},
//   {path: 'protegida', component: ProtegidaComponent}
//
//
// ];
