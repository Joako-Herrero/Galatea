import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from '../model/new-user';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/user-login';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://galatea-backend.onrender.com/auth/';
  constructor(private httpClient: HttpClient) { }

  public nuevo(newUser: NewUser):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'register', newUser);
  }

  public login(userLogin: UserLogin): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', userLogin);
  }
}