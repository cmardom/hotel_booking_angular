import {Component, Input, OnInit, Output} from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {RoomService, Usuario} from "../../services/room.service";
import {JsonPipe, NgFor, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [LoginComponent, NgIf, NgForOf, NgFor, FormsModule, JsonPipe],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  @Input()usuarios: Usuario[]=[];
  @Input()loggedUser: any = {
    "id": '',
    "name": "",
    "booking": [],
    "passwd": ''
  };  constructor(private roomServ:RoomService, private router:Router) {
        this.onLogin();
  }


  onLogin(){
    this.roomServ.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = (data as Usuario[])
        for (const usuario of this.usuarios) {
          if (usuario.name === this.loggedUser.name && usuario.passwd === this.loggedUser.passwd){
            this.loggedUser.id = usuario.id;
            this.loggedUser.name = usuario.name;
            this.loggedUser.booking = usuario.booking;
            this.loggedUser.passwd = usuario.passwd;

          }
        }
      },
      error: (error) => {
        console.log("error")
      }
    });
  }

  protected readonly JSON = JSON;
}
