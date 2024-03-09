import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Subject} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
const USUARIOSURL = "http://localhost:3000/usuarios";

@Injectable({
  providedIn: 'root'
})
export class RoomService {


  constructor(private http: HttpClient) {

  }

  getUsuarios(){
    console.log(this.http.get(USUARIOSURL))
    return this.http.get(USUARIOSURL);
  }
    //para recuperar el nombre de usuario en el navbar de layout

}

export interface Usuario {
  id: number,
  name: string,
  booking: [],
  passwd: String
}
