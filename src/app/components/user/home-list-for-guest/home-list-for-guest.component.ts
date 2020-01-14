import { Component, OnInit } from '@angular/core';
import {HouseConvert} from '../../../interface/house/houseConvert';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {HouseService} from '../../../service/house/house.service';

@Component({
  selector: 'app-home-list-for-guest',
  templateUrl: './home-list-for-guest.component.html',
  styleUrls: ['./home-list-for-guest.component.css']
})
export class HomeListForGuestComponent implements OnInit {

  private info: any;
  // pagination setting
  pageActual = 1;
  maxSize = 3;
  searchText;
  // house: House;
  house: HouseConvert[] = [];

  constructor(private token: TokenStorageService,
              private houseService: HouseService,
  ) {
  }


  ngOnInit() {
    this.getHouseList();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    console.log('token from Browser:' + this.info.token);
  }

  private getHouseList() {
    // this.houseService.getList().subscribe(result => {
    //   this.house = result;
    //   console.log('>>>>House list:' + JSON.stringify(this.house));
    // });
    this.house = this.houseService.convertHouseList();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.house.length; i++) {
      console.log(this.house[i]);
    }
    console.log(this.house);
  }

}
