import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthLoginInfo} from '../../auth/login-infor';
import {AuthService} from '../../auth/auth.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import {Router} from '@angular/router';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string [] = [];
  isSuccess = false;
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private navbar: HeaderComponent) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
    if (this.tokenStorage.getToken()) {
      console.log('token_: ' + this.tokenStorage.getToken());
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password
    );
    this.authService.attemptAuth(this.loginInfo).subscribe(
      responseJWT => {
        console.log('get UserName from BE: ' + responseJWT.data.username);
        console.log('get token from BE: ' + responseJWT.data.accessToken);
        this.tokenStorage.saveId(responseJWT.data.id);
        this.tokenStorage.saveToken(responseJWT.data.accessToken);
        this.tokenStorage.saveUsername(responseJWT.data.username);
        this.tokenStorage.saveAuthorities(responseJWT.data.roles);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.navbar.ngOnInit();
        console.log('>>>>' + this.tokenStorage);
        // this.reloadPage();
        this.router.navigateByUrl('/');
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        this.isSuccess = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
