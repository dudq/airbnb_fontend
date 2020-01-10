import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private roles: string[];
  private authority: string;

  private info: any;

  constructor(private token: TokenStorageService, private router: Router) {
  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log('token from Browser:' + this.info.token);
    if (this.token.getToken()) {
      this.roles = this.token.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_HOST') {
          this.authority = 'host';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  logout() {
    this.authority = null;
    this.token.signOut();
    this.router.navigate(['/home']);
    // this.ngOnInit();
  }

}
