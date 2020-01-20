import {Component, OnInit} from '@angular/core';
import {HouseDetails} from '../../home-detail/houseDetails';
import {HouseService} from '../../../service/house/house.service';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {CategoryService} from '../../../service/category-house/category.service';
import {ICategory} from '../../admin/category/iCategory';
import {DataHouseListOfHost} from './house-list-of-host/dataHouseListOfHost';

@Component({
  selector: 'app-list-house-of-host',
  templateUrl: './list-house-of-host.component.html',
  styleUrls: ['./list-house-of-host.component.css']
})
export class ListHouseOfHostComponent implements OnInit {

  private info: any = {};
  id: number;
  content: string;
  pageActual = 1;
  houseListOfHost: DataHouseListOfHost [];
  house: HouseDetails;
  category: ICategory[];

  constructor(private houseService: HouseService,
              private token: TokenStorageService,
              private router: Router,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getCategoryList();
    this.info = {
      id: this.token.getUserId(),
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getHouseOfHost();
  }

  show() {
    console.log(this.houseListOfHost);
  }

  private getHouseOfHost() {
    console.log(this.info.id);
    this.houseService.getListHouseOfHost(this.info.id).subscribe(result => {
      this.houseListOfHost = result;
      console.log('>>>>>houseList of host ' + JSON.stringify(this.houseListOfHost));
    }, err =>
      (this.content = this.content = JSON.parse(err.error).message));
    this.show();
  }

  private getCategoryList() {
    this.categoryService.getCategoryList().subscribe(result => {
      this.category = result;
    });
  }

}
