import {Injectable} from '@angular/core';
import {TokenStorageService} from './token-storage.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  constructor(private token: TokenStorageService,
              private router: Router) {
  }

  canActivate(): boolean {
    if (this.token.getToken()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
