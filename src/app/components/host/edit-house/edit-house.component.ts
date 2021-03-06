import {Component, OnInit} from '@angular/core';
import {ICategory} from '../../admin/category/iCategory';
import {HouseService} from '../../../service/house/house.service';
import {CategoryService} from '../../../service/category-house/category.service';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireDatabase} from '@angular/fire/database';
import {IHouseDetail} from '../../../interface/house/houseDetail';
import {Picture} from '../../../interface/picture';
import * as firebase from 'firebase';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit {
  isSuccess = false;
  form: any = {};
  house: IHouseDetail;
  // category: ICategory;
  categoryList: ICategory[] = [];
  submitted = false;
  // picture: string;
  arrayPicture: string[] = [];
  houseForm: FormGroup;
  houseName: string;
  category: ICategory;
  picture: Picture[];
  address: string;
  bedroomNumber: number;
  bathroomNumber: number;
  description: string;
  price: number;
  area: number;
  user: any;
  private info: any = {};

  constructor(private houseService: HouseService,
              private categoryService: CategoryService,
              private token: TokenStorageService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private fb: AngularFireDatabase) {
  }

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
    this.houseForm = this.formBuilder.group({
      id: '',
      houseName: new FormControl('', Validators.required),
      // category: new FormControl( Validators.required),
      // picture: new FormControl ('', Validators.required),
      address: new FormControl('', Validators.required),
      bedroomNumber: new FormControl('', [Validators.required, Validators.min(0)]),
      bathroomNumber: new FormControl('', [Validators.required, Validators.min(0)]),
      description: new FormControl(''),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      area: new FormControl('', [Validators.required, Validators.min(0)]),
      user: this.token.getUserId()
    });
    this.getHouseById();
  }

  onSubmit() {
    this.submitted = true;
    this.house = this.houseForm.value;
    this.house.picture = this.picture;
    console.log(this.house);
    // console.log(this.arrayPicture);
    const house = this.houseForm.value;

    // stop here if form is invalid
    // if (this.houseForm.invalid) {
    //   return this.houseService.editHouse(this.house).subscribe(result => {
    //     this.isSuccess = false;
    //     // this.router.navigate(['/home/house-list-for-guest']);
    //   });
    // } else {
    //   this.houseService.addHouse(house).subscribe(result => {
    //     this.isSuccess = true;
    //   });
    // }
    // alert('SUCCESS!! :-)');
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

  private getHouseById() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.houseService.getHouseId(id).subscribe(
      result => {
        const house = result;
        console.log(house);
        this.houseForm.patchValue(house);
        this.houseName = house.houseName;
        this.category = house.category;
        this.picture = house.picture;
        this.address = house.address;
        this.bedroomNumber = house.bedroomNumber;
        this.bathroomNumber = house.bathroomNumber;
        this.description = house.description;
        this.price = house.price;
        this.area = house.area;
      },
      error => {
        this.house = null;
      }
    );
  }
}
