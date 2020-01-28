import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {ICategory} from '../../category/iCategory';
import {HouseService} from '../../../../service/house/house.service';
import {CategoryService} from '../../../../service/category-house/category.service';
import {TokenStorageService} from '../../../../auth/token-storage.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireDatabase} from '@angular/fire/database';
import {IHouseDetail} from '../../../../interface/house/houseDetail';

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements OnInit {

  isSuccess = false;
  submitted = false;
  form: any = {};
  category: ICategory;
  categoryList: ICategory[] = [];
  house: IHouseDetail;
  picture: string;
  arrayPicture: string[];
  houseForm: FormGroup;
  private info: any = {};

  constructor(private houseService: HouseService,
              private categoryService: CategoryService,
              private token: TokenStorageService,
              private router: Router,
              private formBuilder: FormBuilder,
              private fb: AngularFireDatabase
  ) {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.houseForm.controls;
  }

  ngOnInit() {
    this.getCategoryList();
    this.info = {
      id: this.token.getUserId(),
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log('token from Browser:' + this.info.token);
    this.houseForm = this.formBuilder.group({
      houseName: new FormControl('', Validators.required),
      category: new FormControl(this.category, Validators.required),
      picture: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      bedroomNumber: new FormControl('', [Validators.required, Validators.min(0)]),
      bathroomNumber: new FormControl('', [Validators.required, Validators.min(0)]),
      description: new FormControl(''),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      area: new FormControl('', [Validators.required, Validators.min(0)]),
      user: this.token.getUserId()
    });
    console.log('>>>>get user now:' + this.token.getUserId());
  }

  onSubmit() {
    this.submitted = true;
    this.house = this.houseForm.value;
    this.house.picture = this.arrayPicture;
    console.log(this.house);
    console.log(this.arrayPicture);
    const house = this.houseForm.value;

    // stop here if form is invalid
    if (this.houseForm.invalid) {
      return this.houseService.addHouse(this.house).subscribe(result => {
        this.isSuccess = false;
      });
    } else {
      this.houseService.addHouse(house).subscribe(result => {
        this.isSuccess = true;
        alert('SUCCESS!! :-)');
      });
    }
  }

  uploadFile(event) {

    console.log(event);
    const file = event.target.files;
    const metadata = {
      contentType: 'image/jpeg',
    };
    this.arrayPicture = [];
    console.log(this.arrayPicture);
    for (let i = 0; i < file.length;) {
      console.log('Outside ', i, file[i]);
      // @ts-ignore
      const uploadTask = firebase.storage().ref('img/' + file[i].name + Date.now()).put(file[i], metadata);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.arrayPicture[i - 1] = downloadURL;
            console.log(this.arrayPicture);
          });
        });
      i++;
    }
  }

  private getCategoryList() {
    this.categoryService.getListCategory().subscribe(result => {
      // @ts-ignore
      this.categoryList = result;
    });
  }
}
