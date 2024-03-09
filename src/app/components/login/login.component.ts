import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RoomService} from "../../services/room.service";
import {Router, RouterOutlet} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    "id": '',
    "name": "",
    "booking": [],
    "passwd": ''
  };

  constructor(private roomServ: RoomService, private router:Router) {

  }

  onLogin() {
    this.roomServ.login(this.loginObj).pipe(
      tap((res: any) => {
        if (res.result) {
          localStorage.setItem('hotelUser', JSON.stringify(res.data));
          this.router.navigateByUrl('/dashboard');
        } else {
          alert('Check User Credentials!');
        }
      })
    ).subscribe(); // Added subscribe to trigger the observable
  }

}
