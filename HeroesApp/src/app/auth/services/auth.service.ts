import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { enviroment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = enviroment.baseUrl;
  private user: User | undefined;

  get token(): User {
    return { ...this.user! };
  }

  constructor(private http: HttpClient) 
  {
    if (localStorage.getItem("token")) {
      this.user = JSON.parse(localStorage.getItem("token")!)
    }
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + "/api/Usuarios/" + id).pipe(tap(auth => {
      this.user = auth;
      localStorage.setItem("token", JSON.stringify(auth))
    }));
  }

  logout(){
    this.user = undefined;
  }

}
