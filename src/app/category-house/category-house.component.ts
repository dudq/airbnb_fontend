import { Component, OnInit } from '@angular/core';

import {TokenStorageService} from '../auth/token-storage.service';
import {HouseService} from '../service/house/house.service';
import {CategoryHouse} from './data-category/categoryHouse';


@Component({
  selector: 'app-category-house',
  templateUrl: './category-house.component.html',
  styleUrls: ['./category-house.component.css']
})
export class CategoryHouseComponent implements OnInit {

  category: CategoryHouse;
  private info: any;
  pageActual = 1;

  constructor(private token: TokenStorageService,
              private houseService: HouseService) {
  }

  ngOnInit() {
    this.getCategoryList();
    this.info = {
      id: this.token.getUserId(),
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  private getCategoryList() {
    this.houseService.getListCategory().subscribe(result => {
      // @ts-ignore
      this.category = result;
    });
  }

}
