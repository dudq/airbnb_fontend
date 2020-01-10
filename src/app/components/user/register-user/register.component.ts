import {Component, OnInit} from '@angular/core';
import {SignUpInfo} from '../../../auth/signup-info';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthLoginInfo} from '../../../auth/login-infor';
import {AuthService} from '../../../auth/auth.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {HeaderComponent} from '../../header/header.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  registerForm: FormGroup;
  submitted = false;
  roles: string[] = [];
  isLoggedIn = false;
  isLoginFailed = false;
  isSuccess = false;
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private tokenStorage: TokenStorageService,
              private navbar: HeaderComponent) {
  }

  get f() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);
// store to web browser;
    this.authService.attemptAuth(this.loginInfo).subscribe(
      responseJWT => {
        console.log('get UserName from BE:' + responseJWT.data.username);
        console.log('get token from BE:' + responseJWT.data.accessToken);
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

  onSubmit() {
    console.log(this.form);
    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.submitted = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      });

    alert('Đăng ký thành công');
    this.login();

  }

}
