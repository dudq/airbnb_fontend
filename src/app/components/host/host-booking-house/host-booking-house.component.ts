import {Component, OnInit} from '@angular/core';
import {IHouseBooking} from '../../../interface/housebooking';
import {Info} from '../../../interface/info';
import {HouseBookingService} from '../../../service/order-house/housebooking.service';
import {TokenStorageService} from '../../../auth/token-storage.service';

@Component({
  selector: 'app-host-booking-house',
  templateUrl: './host-booking-house.component.html',
  styleUrls: ['./host-booking-house.component.css']
})
export class HostBookingHouseComponent implements OnInit {
  houseBookedList: IHouseBooking[];
  message: string;
  isSuccess: boolean;
  currentUser: Info = {};

  constructor(private houseBookingService: HouseBookingService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.currentUser.id = this.token.getUserId();
    this.houseBookingService.getHouseId(this.currentUser.id).subscribe(
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
