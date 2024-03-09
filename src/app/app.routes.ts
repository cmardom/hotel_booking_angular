import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {RoomsComponent} from "./components/rooms/rooms.component";
import {NewBookingComponent} from "./components/new-booking/new-booking.component";
import {BookingListComponent} from "./components/booking-list/booking-list.component";
import {BookingCalendarComponent} from "./components/booking-calendar/booking-calendar.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'layout', component: LayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'rooms', component: RoomsComponent },
      { path: 'newBooking', component: NewBookingComponent },
      { path: 'bookings', component: BookingListComponent },
      { path: 'booking-calendar', component: BookingCalendarComponent },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];
