import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  apiEndPoint: String = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {

  }

  login(obj:any){
    return this.http.post(this.apiEndPoint + 'Login', obj);
  }
}
