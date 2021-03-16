import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from 'src/app/core/services/envservice/env.service';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private env: EnvService) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.env.signUpUrl, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
}
