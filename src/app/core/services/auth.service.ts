import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

export interface AuthResponse {
  idToken:	string;
  email:	string;
  refreshToken:	string;
  expiresIn:	string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user = new BehaviorSubject<User>(null);
  
  constructor(
    private _http: HttpClient,
    private _router: Router
    ) { }

  signUp(email: string, password: string): Observable<AuthResponse> {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBsl0FOQlK2BU-CRmsJjl5DyYcXzOSD0ok';

    return this._http.post<AuthResponse>( url, { email: email, password: password, returnSecureToken: true } )
      .pipe(
        catchError(this._handleError), 
        tap(resData => {
          this.handleAuth(
            resData.email, 
            resData.localId, 
            resData.idToken, 
            resData.expiresIn
          );
      })
    );
  }

  login(email: string, password: string): Observable<AuthResponse> {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBsl0FOQlK2BU-CRmsJjl5DyYcXzOSD0ok';

    return this._http.post<AuthResponse>(url, { email: email, password: password, returnSecureToken: true } )
    .pipe(
      catchError(this._handleError),
      tap(resData => {
        this.handleAuth(
          resData.email, 
          resData.localId, 
          resData.idToken, 
          resData.expiresIn
        );
      })
    );
  }

  logout() {
    this.user.next(null);
    this._router.navigate(['/auth']);
  }

  private handleAuth(email: string, userId: string, token: string, expIn: string) {
    const expDate = new Date(
      new Date().getTime() + Number(expIn) + 1000
    );
    const user = new User(
      email, 
      userId, 
      token, 
      expDate
    );
    this.user.next(user)
    console.log(user);
  }

  private _handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured';
    if(!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct';
        break;
    }
    return throwError(errorMessage);
  }
}
