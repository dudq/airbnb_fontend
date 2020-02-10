import {Component, OnInit} from '@angular/core';
import {IHouseBooking} from '../../../interface/housebooking';
import {Info} from '../../../interface/info';
import {HouseBookingService} from '../../../service/order-house/housebooking.service';
import {TokenStorageService} from '../../../auth/token-storage.service';

@Component({
  selector: 'app-user-house-booking',
  templateUrl: './user-house-booking.component.html',
  styleUrls: ['./user-house-booking.component.css']
})
export class UserHouseBookingComponent implements OnInit {
  houseBookedList: IHouseBooking[];
  message: string;
  isSuccess: boolean;
  currentUser: Info = {};

  constructor(private houseBookingService: HouseBookingService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.currentUser.id = this.token.getUserId();
    this.houseBookingService.getHouseUser(this.currentUser.id).subscribe(
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
