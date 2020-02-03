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

  constructor(private houseBookingService: HouseBookingService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.currentUser.id = this.token.getUserId();
    this.houseBookingService.getHouseList().subscribe(
      result => {
        this.isSuccess = result.success;
        if (result.success) {
          this.houseBookedList = result.data;
        }
      }, error => {
        this.isSuccess = false;
        this.message = 'Something error ?';
      }
    );
  }
}
