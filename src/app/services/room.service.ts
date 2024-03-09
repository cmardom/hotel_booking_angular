import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";

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

  /*login(obj:any){
    return this.http.post(this.apiEndPoint + 'Login', obj);
  }*/

  getUsuarios(){
    console.log(this.http.get(USUARIOSURL))
    return this.http.get(USUARIOSURL);
  }
}

export interface Usuario {
  id: number,
  name: string,
  booking: [],
  passwd: String
}
