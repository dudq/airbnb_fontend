import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {HouseService} from '../../../service/house/house.service';
import {IHouseDetail} from '../../../interface/house/houseDetail';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../service/category-house/category.service';
import {ICategory} from '../../admin/category/iCategory';

@Component({
  selector: 'app-home-list-for-guest',
  templateUrl: './home-list-for-guest.component.html',
  styleUrls: ['./home-list-for-guest.component.css']
})
export class HomeListForGuestComponent implements OnInit {

  private info: any;
  categoryList: ICategory[];
  pageActual = 1;
  maxSize = 3;
  formSearch: FormGroup;
  searchName;
  searchArea;
  searchBedRoom;
  searchCategory;
  searchPrice;
  // house: House;
  house: IHouseDetail[] = [];

  constructor(private token: TokenStorageService,
              private houseService: HouseService,
              private categoryService: CategoryService,
              private fb: FormBuilder
  ) {
  }


  ngOnInit() {
    this.getHouseList();
    this.getCategoryList();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.formSearch = this.fb.group({
      searchName: new FormControl(''),
      searchCategory: new FormControl(''),
      searchArea: new FormControl(''),
      searchBedRoom: new FormControl(''),
      searchPrice: new FormControl(''),
    });
    // this.formSearch = new FormControl('');
    // console.log('>>>' + this.searchName);
    // console.log('>>>' + typeof this.searchCategory);
    // console.log('token from Browser:' + this.info.token);
  }

  private getHouseList() {
    this.houseService.getHouseList().subscribe(result => {
      this.house = result;
      console.log('>>>>House list:' + JSON.stringify(this.house));
    });
    // this.house = this.houseService.convertHouseList();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.house.length; i++) {
      console.log(this.house[i]);
    }
    console.log(this.house);
  }

  private getCategoryList() {
    this.categoryService.getCategoryList().subscribe(result => {
      this.categoryList = result;
    });
  }
}
