import {Component, OnInit} from '@angular/core';
import {HouseBookingService} from '../../../../service/order-house/housebooking.service';
import {IHouseBooking} from '../../../../interface/housebooking';
import {Info} from '../../../../interface/info';
import {TokenStorageService} from '../../../../auth/token-storage.service';

@Component({
  selector: 'app-house-booking-list',
  templateUrl: './house-booking-list.component.html',
  styleUrls: ['./house-booking-list.component.css']
})
export class HouseBookingListComponent implements OnInit {
  houseBookedList: IHouseBooking[];
  message: string;
  isSuccess: boolean;
  currentUser: Info = {};
  isCancel: boolean;

  constructor(private houseBookingService: HouseBookingService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.currentUser.id = this.token.getUserId();
    this.houseBookingService.getHouseList().subscribe(
      result => {
        this.isSuccess = result.success;
        this.message = result.message;
        if (result.success) {
          this.houseBookedList = result.data;
        }
      }, error => {
        this.isSuccess = false;
        this.message = 'Something error ?';
      }
    );
  }

  checkIn(id: number) {
    this.houseBookingService.checkIn(id).subscribe(
      result => {
        this.message = result.message;
        this.ngOnInit();
      }
    );
  }

  checkOut(id: number) {
    this.houseBookingService.checkOut(id).subscribe(
      result => {
        this.message = result.message;
        this.ngOnInit();
      }
    );
  }

  cancelHouseBooking(id: number) {
    this.houseBookingService.cancel(id).subscribe(
      result => {
        this.isCancel = result.success;
        this.message = result.message;
        alert(result.message);
        this.ngOnInit();
      }
    );
  }
}
