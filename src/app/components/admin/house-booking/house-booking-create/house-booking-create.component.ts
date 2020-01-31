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
  message = false;
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
      dateCheckIn: [this.now, [Validators.required, checkInValidate]],
      dateCheckOut: [this.now, [Validators.required, checkInValidate]],
      guest: [1],
      house: {id: houseId},
      user: {id: this.user},
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const {value} = this.bookingForm;
      this.houseBooking = value;
      console.log('>>>' + JSON.stringify(this.houseBooking));

      this.houseBookingService.addHouse(this.houseBooking).subscribe(
        next => {
          console.log(next);
          this.message = true;
          this.ngOnInit();
        }
      );
    } else {
      console.log('error');
    }
  }
}
