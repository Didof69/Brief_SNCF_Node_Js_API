import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { DataUser } from '../models/dataUser';
import { Login } from '../models/login';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signUp(user: User): Observable<DataUser> {
    return this.http.post<DataUser>(
      `http://localhost:3000/api/users/signup`,
      user
    );
  }

  login(login: Login): Observable<Token> {
    return this.http.post<Token>(
      `http://localhost:3000/api/users/login`,
      login
    );
  }
}
