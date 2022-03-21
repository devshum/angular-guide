import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponse {
  idToken:	string;
  email:	string;
  refreshToken:	string;
  expiresIn:	string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient) { }

  signUp(email: string, password: string): Observable<AuthResponse> {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBsl0FOQlK2BU-CRmsJjl5DyYcXzOSD0ok';

    return this._http.post<AuthResponse>(url, { email: email, password: password, returnSecureToken: true})
  }
}
