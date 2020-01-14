import {Component, OnInit} from '@angular/core';
import {DataCreateHouse} from './data-house/dataCreateHouse';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {HouseService} from '../../../service/house/house.service';
import {CategoryHouse} from '../../category-house/data-category/categoryHouse';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {
  submitted = false;
  houseData: DataCreateHouse;
  houseForm: FormGroup;
  arrayPicture: string;
  isSuccess = false;
  category: CategoryHouse;
  private info: any = {};

  constructor(private houseService: HouseService,
              private token: TokenStorageService,
              private router: Router,
              private formBuilder: FormBuilder,
              private fb: AngularFireDatabase) {
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

  onSubmit() {
    this.submitted = true;
    this.houseData = this.houseForm.value;
    this.arrayPicture = this.arrayPicture.trim();
    this.houseData.price = this.arrayPicture;
    console.log(this.houseData);
    const house = this.houseForm.value;
    if (this.houseForm.invalid) {
      return this.houseService.addHouse(this.houseData).subscribe(result => {
        this.isSuccess = false;
        // this.router.navigate(['/home/house-list-for-guest']);
      });
    } else {
      this.houseService.addHouse(house).subscribe(result => {
        this.isSuccess = true;
      });
    }

    alert('SUCCESS!! :-)');
  }

  private getCategoryList() {
    this.houseService.getListCategory().subscribe(result => {
      this.category = result;
    });
  }
}
