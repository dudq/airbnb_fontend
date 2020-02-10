import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IHouseBooking} from '../../../../interface/housebooking';
import {HouseBookingService} from '../../../../service/order-house/housebooking.service';
import {ActivatedRoute} from '@angular/router';
import {TokenStorageService} from '../../../../auth/token-storage.service';
import {HouseService} from '../../../../service/house/house.service';
import {IHouseDetail} from '../../../../interface/house/houseDetail';

function checkInValidate(control: FormControl) {
  const dateNow = Date.parse(new Date().toISOString().substring(0, 10));
  const dateValue = Date.parse(control.value);
  if (dateValue < dateNow) {
    return {
      beforeNow: {
        value: dateValue
      }
    };
  }
  return null;
}


@Component({
  selector: 'app-house-booking-create',
  templateUrl: './house-booking-create.component.html',
  styleUrls: ['./house-booking-create.component.css']
})

export class HouseBookingCreateComponent implements OnInit {
  bookingForm: FormGroup;
  house: IHouseDetail;
  user: any;
  houseBooking: IHouseBooking;
  isSubmited = false;
  isSuccess: boolean;
  message: string;
  now = new Date().toISOString().substring(0, 10);
  private info: any;

  constructor(private fb: FormBuilder,
              private houseBookingService: HouseBookingService,
              private route: ActivatedRoute,
              private token: TokenStorageService,
              private houseService: HouseService,
  ) {
  }

  ngOnInit() {
    console.log('>>>' + this.now);
    const houseId = this.route.snapshot.paramMap.get('id').toString();
    this.user = this.token.getUserId();

    this.bookingForm = this.fb.group({
      id: [''],
      dateCheckIn: new FormControl(this.now, [Validators.required, checkInValidate]),
      dateCheckOut: new FormControl(this.now, [Validators.required, checkInValidate]),
      guest: [1],
      house: {id: houseId},
      user: {id: this.user},
    });
    console.log(this.bookingForm.value);
    console.log(this.bookingForm.controls.dateCheckIn.value);
  }

  checkDateOfCheckOut() {
    if (this.bookingForm.controls.dateCheckIn.value > this.bookingForm.controls.dateCheckOut.value) {
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.bookingForm.valid && this.checkDateOfCheckOut()) {
      const {value} = this.bookingForm;
      this.houseBooking = value;
      console.log('>>>' + JSON.stringify(this.houseBooking));

      this.houseBookingService.addHouse(this.houseBooking).subscribe(
        result => {
          this.isSuccess = result.success;
          this.message = result.message;
          this.ngOnInit();
        }
      );
    } else {
      this.isSuccess = false;
      console.log('error');
    }
    this.isSubmited = true;
  }
}

