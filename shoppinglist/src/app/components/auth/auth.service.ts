import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EnvService } from 'src/app/core/services/envservice/env.service';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private env: EnvService) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.env.signUpUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.env.loginUrl, {
        email: email,
        passowrd: password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already, please login.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email entered does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'The password entered was incorrect';
    }
    return throwError(errorMessage);
  }
}
