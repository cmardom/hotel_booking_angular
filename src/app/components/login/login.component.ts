import {Component, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RoomService, Usuario} from "../../services/room.service";
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
  @Output()usuarios: Usuario[]=[];
  @Output()loginObj: any = {
    "id": '',
    "name": "",
    "booking": [],
    "passwd": ''
  };

  constructor(private roomServ: RoomService, private router:Router) {

  }

  getUsuarios() {
    this.roomServ.getUsuarios().subscribe((data) =>
      this.usuarios= (data as any));
  }


  onLogin(){
    this.roomServ.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = (data as Usuario[])
        for (const usuario of this.usuarios) {
          if (usuario.name === this.loginObj.name && usuario.passwd === this.loginObj.passwd){
            this.loginObj.id = usuario.id;
            this.loginObj.name = usuario.name;
            this.loginObj.booking = usuario.booking;
            this.loginObj.passwd = usuario.passwd;
            alert('succesful login')
            this.router.navigateByUrl('/layout')
          }
        }
      },
      error: (error) => {
        console.log("error")
      }
    });
  }

}

/*
this.appService.crearProducto(producto).subscribe(
  {next: () => {
      console.log("producto creado: ", producto);
      this.productos.push(producto);
    },
    error: (error:HttpErrorResponse) => {
      let s:string;
      s=error.error
      s=s.substring(0,s.indexOf(' at '))
      this.setAviso(s);
      console.error(s, error.message);
    }});*/
