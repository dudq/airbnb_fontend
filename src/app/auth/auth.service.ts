import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthLoginInfo} from './login-infor';
import {Observable} from 'rxjs';
import {JwtResponse} from './jwt-response';
// @ts-ignore
import {SignUpInfo} from './sigup-info';
import {SigupHostInfo} from './sigup-host-info';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
  private signUpHostUrl = 'http://localhost:8080/api/auth/host/signup';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  signUpHost(info: SigupHostInfo): Observable<string> {
    return this.http.post<string>(this.signUpHostUrl, info, httpOptions);
  }
}
